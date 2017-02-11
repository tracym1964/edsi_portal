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
    entity = models.ForeignKey(to='Entity', null=False, related_name='+')
    tax_id = models.CharField(db_index=True, max_length=15, null=True, blank=False)
    name = models.CharField(max_length=50, null=False, blank=False)
    first_name = models.CharField(max_length=50, null=True, blank=False)
    middle_name = models.CharField(max_length=50, null=True, blank=False)
    maiden_name = models.CharField(max_length=50, null=True, blank=False)
    address1 = models.CharField(max_length=50, null=False, blank=True)
    address2 = models.CharField(max_length=50, null=True, blank=True)
    address3 = models.CharField(max_length=50, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    state = models.ForeignKey(to='State', null=True, related_name='+')
    postal_code = models.CharField(max_length=10, null=True, blank=True)
    country = models.ForeignKey(to='Country', null=True, related_name='+')
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

STATUS_TYPES = (
    ('E', 'Enrolled'),
    ('G', 'Grace'),
    ('P', 'Post-deferment grace'),
    ('D', 'Deferment'),
    ('O', 'Postponement'),
    ('A', 'Active repayment'),
    ('T', 'Temporary'),
    ('B', 'Bankruptcy'),
    ('S', 'Assigned'),
    ('Z', 'Closed'),
)


# Status model
# ------------
# This table defines the status codes table
class Status(BaseModel, models.Model):
    """
    Status codes
    """
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=15, null=False, blank=False)
    desc = models.CharField(max_length=50, null=False, blank=False)
    type = models.CharField(max_length=1, choices=STATUS_TYPES)
    accrue_flag = models.BooleanField(default=True)
    statements_flag = models.BooleanField(default=True)
    print_past_due_flag = models.BooleanField(default=True)
    aging_flag = models.BooleanField(default=True)
    credit_bureau_flag = models.BooleanField(default=False)
    print_journal_flag = models.BooleanField(default=True)
    next_status = models.IntegerField()
    count_months_effective = models.SmallIntegerField()

    class Meta:
        db_table = "status"
        verbose_name_plural = "Status Code Book"

TRAN_TYPES = (
    ('A', 'Adjustment'),
    ('C', 'Cancellation'),
    ('D', 'Deferment'),
    ('L', 'Life-to-date collection'),
    ('M', 'Non-monetary'),
    ('O', 'Postponement'),
    ('P', 'Payment'),
    ('Y', 'Year-to-date collection')
)
DEBIT_CREDIT = (
    ('D', 'Debit'),
    ('C', 'Credit'),
    ('N', 'N/A')
)
AFFECTS = (
    ('A', 'All balances'),
    ('C', 'Collection costs'),
    ('G', 'Litigation costs'),
    ('I', 'Interest'),
    ('L', 'Late fees'),
    ('N', 'N/A'),
    ('P', 'Principal')
)


# Tran Code model
# ------------
# This table defines the transaction codes table
class TranCode(BaseModel, models.Model):
    """
    Transaction codes
    """
    id = models.IntegerField(primary_key=True)
    short = models.CharField(max_length=15, null=False, blank=False)
    desc = models.CharField(max_length=50, null=False, blank=False)
    drcr = models.CharField(max_length=1, choices=DEBIT_CREDIT)
    affects = models.CharField(max_length=1, choices=AFFECTS)
    table_id = models.SmallIntegerField(default=0)

    class Meta:
        db_table = "tran_code"
        verbose_name_plural = "Transaction Code Book"

