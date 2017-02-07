from __future__ import unicode_literals

from django.db import models
from edsi_portal.models import BaseModel, NoSyncModel


# Entity model
# ------------
# This table defines entity types such as those found in the Person table
class Entity(NoSyncModel, models.Model):
    """
    """
    desc = models.CharField(max_length=50, null=False, blank=False)

    class Meta:
        db_table = "entity"
        verbose_name_plural = "Entity Master"


# State model
# ------------
# This table defines the states table
class State(BaseModel, models.Model):
    """
    State codes
    """
    code = models.CharField(primary_key=True, max_length=2, null=False, blank=False)
    name = models.CharField(max_length=20, null=True, blank=False)

    class Meta:
        db_table = "state"
        verbose_name_plural = "State Book"


# Country model
# ------------
# This table defines the person table which contains demographics for any entity
class Country(BaseModel, models.Model):
    """
    Country codes from ISO
    """
    code = models.CharField(primary_key=True, max_length=2, null=False, blank=False)
    name = models.CharField(max_length=50, null=False, blank=False)
    name_fr = models.CharField(max_length=50, null=False, blank=False)

    class Meta:
        db_table = "country"
        verbose_name_plural = "Country Book"


# Person model
# ------------
# This table defines the person table which contains demographics for any entity
class Person(NoSyncModel, models.Model):
    """
    """
    entity = models.ForeignKey(to='Entity', null=False)
    tax_id = models.CharField(max_length=15, null=True, blank=False)
    account = models.CharField(max_length=50, null=False, blank=False)
    name = models.CharField(max_length=50, null=False, blank=False)
    first_name = models.CharField(max_length=50, null=True, blank=False)
    middle_name = models.CharField(max_length=50, null=True, blank=False)
    maiden_name = models.CharField(max_length=50, null=True, blank=False)
    address1 = models.CharField(max_length=50, null=False, blank=True)
    address2 = models.CharField(max_length=50, null=True, blank=True)
    address3 = models.CharField(max_length=50, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    state = models.ForeignKey(to='State', null=True)
    postal_code = models.CharField(max_length=10, null=True, blank=True)
    country = models.ForeignKey(to='Country', null=True)
    home_phone = models.CharField(max_length=20, null=True, blank=False)
    work_phone = models.CharField(max_length=20, null=True, blank=False)
    mobile_phone = models.CharField(max_length=20, null=True, blank=False)
    fax = models.CharField(max_length=20, null=True, blank=False)
    email1 = models.CharField(max_length=80, null=True, blank=False)
    email2 = models.CharField(max_length=80, null=True, blank=False)
    dob = models.DateField(null=True)
    valid_address = models.BooleanField()
    valid_home_phone = models.BooleanField()
    valid_work_phone = models.BooleanField()
    valid_mobile_phone = models.BooleanField()

    class Meta:
        db_table = "person"
        verbose_name_plural = "Person Book"
