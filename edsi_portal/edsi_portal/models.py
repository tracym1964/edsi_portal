from django.db import models
from django.db.models import Q
from django.db.models.query import EmptyQuerySet
from django.utils import timezone

import datetime
from idgenerator import generate_short_uuid

from .settings import SESSION_AUTH_COMPANY, SESSION_AUTH_REGION, SESSION_AUTH_TERRITORY


NO_SYNC = 0
UNIDIRECTIONAL_SYNC = 1
BIDIRECTIONAL_SYNC = 2
UNIDIRECTIONAL_FROM_DEVICE_SYNC = 3
CREATE_ON_DEVICE_DELETE_ON_MYSQL_SYNC = 4


MIN_EFF_DATETIME = datetime.datetime(1900, 1, 1, 0, 0, 1)
MAX_END_DATETIME = datetime.datetime(datetime.MAXYEAR, 12, 31, 23, 59, 59)
MIN_EFF_DATE = datetime.date(1900, 1, 1)
MAX_END_DATE = datetime.date(datetime.MAXYEAR, 12, 31)


# Base class that introduces sync metadata about the model. All of the ryko models
# should be descend
class BaseModel(models.Model):
    class Meta:
        abstract = True

    class SyncMeta:
        sync = NO_SYNC

    @classmethod
    def get_java_class_name(cls):
        return cls.__name__

    @classmethod
    def get_java_tostring_columns(cls):
        return []


class NoSyncModel(BaseModel):
    # Primary key deferred to subclass
    # _id = models.AutoField(primary_key=True)
    created = models.DateTimeField(editable=False)
    modified = models.DateTimeField(editable=False)
    created_by = models.IntegerField(null=True)

    class Meta:
        abstract = True

    class SyncMeta:
        sync = NO_SYNC


class UnidirectionalSyncModel(BaseModel):
    _id = models.BigIntegerField(primary_key=True, default=generate_short_uuid)

    class Meta:
        abstract = True

    class SyncMeta:
        sync = UNIDIRECTIONAL_SYNC


class UnidirectionalIntegerSyncModel(BaseModel):
    _id = models.IntegerField(primary_key=True)

    class Meta:
        abstract = True

    class SyncMeta:
        sync = UNIDIRECTIONAL_SYNC


class UniSyncWithAutoIncrementKeyModel(BaseModel):
    _id = models.AutoField(primary_key=True)

    class Meta:
        abstract = True

    class SyncMeta:
        sync = UNIDIRECTIONAL_SYNC


class BidirectionalSyncModel(BaseModel):
    _id = models.BigIntegerField(primary_key=True, default=generate_short_uuid)

    class Meta:
        abstract = True

    class SyncMeta:
        sync = BIDIRECTIONAL_SYNC


# base class for models that should push from devices to mysql, but not pull from mysql. Like signatures.
class UniSyncFromDevice(BaseModel):
    _id = models.BigIntegerField(primary_key=True, default=generate_short_uuid)

    class Meta:
        abstract = True

    class SyncMeta:
        sync = UNIDIRECTIONAL_FROM_DEVICE_SYNC


class BiSyncCreateOnDeviceDeleteOnMysql(BaseModel):
    _id = models.BigIntegerField(primary_key=True, default=generate_short_uuid)

    class Meta:
        abstract = True

    class SyncMeta:
        sync = CREATE_ON_DEVICE_DELETE_ON_MYSQL_SYNC


class UserAuthorityTemplate(object):

    auth_paths = {}
    auth_request_paths = {}

    def get_auth_paths(self):
        return UserAuthorityTemplate.auth_paths

    def get_auth_default(self, request=None, user=None):
        raise NotImplementedError("Subclasses should implement this!")

    def get_auth_customer(self, user):
        return self.get_auth_default(user)

    def get_auth_employee(self, user):
        return self.get_auth_default(user)

    def get_auth_request(self, request):
        return self.get_auth_default(request=request)

    def authorized(self, request=None, user=None):
        if request:
            return self.get_auth_request(request)

        if user:
            if user.is_employee():
                return self.get_auth_employee(user)
            elif user.is_customer():
                return self.get_auth_customer(user)

        return self.get_auth_default(user)


class TerritoryAssignableQuerySet(models.QuerySet, UserAuthorityTemplate):

    auth_paths = UserAuthorityTemplate.auth_paths
    auth_paths['territory_user'] = 'territory__place__placeassignment__user'
    auth_paths['region_user'] = 'region__place__placeassignment__user'
    auth_paths['company_user'] = 'company__place__placeassignment__user'

    auth_paths['company_request'] = 'company_id__in'
    auth_paths['region_request'] = 'region_id__in'
    auth_paths['territory_request'] = 'territory_id__in'

    def get_auth_paths(self):
        return TerritoryAssignableQuerySet.auth_paths

    def get_employee_filter_criteria(self, user):
        return Q(**{self.get_auth_paths()['territory_user']: user}) | \
            Q(**{self.get_auth_paths()['region_user']: user}) | \
            Q(**{self.get_auth_paths()['company_user']: user})

    def get_request_filter_criteria(self, request):
        company = request.session[SESSION_AUTH_COMPANY]
        region = request.session[SESSION_AUTH_REGION]
        territory = request.session[SESSION_AUTH_TERRITORY]

        criteria = None
        if company:
            if criteria:
                criteria |= Q(**{self.get_auth_paths()['company_request']: company})
            else:
                criteria = Q(**{self.get_auth_paths()['company_request']: company})

        if region:
            if criteria:
                criteria |= Q(**{self.get_auth_paths()['region_request']: region})
            else:
                criteria = Q(**{self.get_auth_paths()['region_request']: region})

        if territory:
            if criteria:
                criteria |= Q(**{self.get_auth_paths()['territory_request']: territory})
            else:
                criteria = Q(**{self.get_auth_paths()['territory_request']: territory})

        return criteria

    def get_auth_default(self, request=None, user=None):
        return EmptyQuerySet()

    def get_auth_employee(self, user):
        return self.filter(self.get_employee_filter_criteria(user)).distinct()

    def get_auth_request(self, request):
        return self.filter(self.get_request_filter_criteria(request))


class TerritoryAssignableManager(models.Manager):
    def get_queryset(self):
        return TerritoryAssignableQuerySet(self.model, using=self._db)

    def authorized(self, request=None, user=None):
        return self.get_queryset().authorized(request=request, user=user)


class TerritoryAssignableModel(models.Model):
    company = models.ForeignKey(to='security.Company', blank=True, null=True, unique=False)
    region = models.ForeignKey(to='security.Region', blank=True, null=True, unique=False)
    territory = models.ForeignKey(to='security.Territory', blank=True, null=True, unique=False)

    objects = TerritoryAssignableManager()

    class Meta:
        abstract = True


class CustomerAssignableModel(models.Model):
    # Hint:  could change these to be: , default=None
    customer = models.ForeignKey(to='customers.Customer', blank=False, null=False, unique=False)

    class Meta:
        abstract = True


class UserAssignableModel(models.Model):
    user = models.ForeignKey(to='security.User', blank=False, null=False, unique=False)

    class Meta:
        abstract = True


class EffectiveDateTimeQuerySet(models.QuerySet):
    def effective(self, reference_date=None):
        if reference_date is None:
            reference_date = timezone.now()

        return self.filter(
            eff_date__lte=reference_date,
            end_date__gt=reference_date,
        )


class EffectiveDateTimeManager(models.Manager):
    def get_queryset(self):
        return EffectiveDateTimeQuerySet(self.model, using=self._db)

    def effective(self, reference_date=None):
        return self.get_queryset().effective(reference_date)


class EffectiveDateTime(models.Model):
    # datetime after which the code is effective
    eff_date = models.DateTimeField(
        auto_now=False,
        auto_now_add=False,
        default=MIN_EFF_DATETIME,
        db_index=True)
    # datetime after which the code is no longer effective
    # datetime.utc.date
    end_date = models.DateTimeField(
        auto_now=False,
        auto_now_add=False,
        default=MAX_END_DATETIME,
        db_index=True)

    objects = EffectiveDateTimeManager()

    class Meta:
        abstract = True


class EffectiveDateQuerySet(models.QuerySet):
    def effective(self, reference_date=None):
        if reference_date is None:
            reference_date = timezone.now().date()

        return self.filter(
            eff_date__lte=reference_date,
            end_date__gt=reference_date,
        )


class EffectiveDateManager(models.Manager):
    def get_queryset(self):
        return EffectiveDateQuerySet(self.model, using=self._db)

    def effective(self, reference_date=None):
        return self.get_queryset().effective(reference_date)


class EffectiveDate(models.Model):
    # datetime after which the code is effective
    eff_date = models.DateField(
        auto_now=False,
        auto_now_add=False,
        default=MIN_EFF_DATE,
        db_index=True)
    # datetime after which the code is no longer effective
    # datetime.utc.date
    end_date = models.DateField(
        auto_now=False,
        auto_now_add=False,
        default=MAX_END_DATE,
        db_index=True)

    objects = EffectiveDateManager()

    class Meta:
        abstract = True


# For Reference Tables (http://en.wikipedia.org/wiki/Reference_table)
class ReferenceModel(models.Model):
    # the enum-like value that is referenced in the application code
    code = models.CharField(max_length=50, null=True, blank=True)
    # the string value is stored in the AS400
    # integration_value = models.CharField(max_length=255, null=True, blank=True)
    # description of the code.
    # description is not meant to ever be displayed to the user since this is an internationalized app
    description = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        abstract = True

    def __unicode__(self):
        return self.description


# Like ReferenceModel, but with a name field instead of desc. code and name both required and must be unique
class NameReferenceModel(models.Model):
    # the enum-like value that is referenced in the application code
    # Fields code and name replaced unique=True to db_index=True.  Without an AutoField primary key, a key
    # and an index are created with the same name.  MySQL can handle this, but Sqlite cannot.
    # Since the AS/400 is the source of truth, the code and name should remain unique.
    code = models.CharField(max_length=50, null=False, blank=False, db_index=True)
    name = models.CharField(max_length=255, null=False, blank=False, db_index=True)

    class Meta:
        abstract = True

    def __unicode__(self):
        return self.name


class Language(UnidirectionalIntegerSyncModel):
    # the enum-like value that is referenced in the application code
    code = models.CharField(max_length=12, null=True, blank=True)
    # description of the language.
    description = models.CharField(max_length=255, null=True, blank=True)

    def __unicode__(self):
        return self.description

    class Meta:
        db_table = 'language'
