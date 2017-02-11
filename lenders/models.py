from __future__ import unicode_literals

from django.db import models
from edsi_portal.models import NoSyncModel, BaseModel
from structures.models import Status

LC_TYPES = (
    ('F', 'Fixed amount'),
    ('P', 'Percentage of payment'),
)

BILLER_STATUS = (
    ('A', 'Active'),
    ('I', 'Inactive'),
)


# Biller model
# ------------
# This table defines the biller/lender table which defines processing options for the biller
class Biller(NoSyncModel, models.Model):
    """
    Biller table. 'biller_number' column is the identifier
    """
    biller_number = models.CharField(db_index=True, max_length=50, null=False, blank=False)
    person = models.ForeignKey(to='structures.Person', null=False, related_name='+')
    officer_contact = models.ForeignKey(to='structures.Person', null=True, related_name='+')
    primary_contact = models.ForeignKey(to='structures.Person', null=False, related_name='+')
    parent = models.ForeignKey(to='structures.Person', null=True, related_name='+')
    # bill_to is address that prints as return address for billing statements
    bill_to = models.ForeignKey(to='structures.Person', null=True, related_name='+')
    late_charge_type = models.CharField(max_length=1, choices=LC_TYPES)
    late_charge_amount = models.DecimalField(max_digits=7, decimal_places=2)
    late_charge_threshold = models.DecimalField(max_digits=7, decimal_places=2)
    late_charge_min_days = models.SmallIntegerField()
    fiscal_month = models.SmallIntegerField()
    cycle_day = models.SmallIntegerField()
    small_balance_threshold = models.DecimalField(max_digits=7, decimal_places=2)
    date_service_start = models.DateField()
    status = models.CharField(max_length=1, choices=BILLER_STATUS)

    class Meta:
        db_table = "biller"
        verbose_name_plural = "Biller Book"


ACCRUAL_METHOD = (
    ('S', 'Simple interest'),
    ('F', 'Fixed days'),
)


# Fund model
# ------------
# This table defines the funds table which defines processing options for the biller
class Fund(NoSyncModel, models.Model):
    """
    Fund table. 'fund_number' column is the identifier
    """
    fund_name = models.CharField(max_length=50, null=False, blank=False)
    desc = models.CharField(max_length=100)
    past_due_days_1 = models.SmallIntegerField()
    past_due_days_2 = models.SmallIntegerField()
    past_due_days_3 = models.SmallIntegerField()
    past_due_days_4 = models.SmallIntegerField()
    past_due_days_5 = models.SmallIntegerField()
    bill_lead_days = models.SmallIntegerField()
    accrual_days_per_year = models.SmallIntegerField()
    accrual_method = models.CharField(max_length=1, choices=ACCRUAL_METHOD)

    class Meta:
        db_table = "fund"
        verbose_name_plural = "Fund Book"


# Loan type model
# ------------
# This table defines the funds table which defines processing options for the biller
class LoanType(NoSyncModel, models.Model):
    """
    Loan-type table. 'loan_type' column is the identifier
    """
    fund = models.ForeignKey(to='lenders.Fund', related_name='+')
    name = models.CharField(max_length=50, null=False, blank=False)
    desc = models.CharField(max_length=100)
    default_interest_rate = models.DecimalField(max_digits=7, decimal_places=5)
    grace_months = models.SmallIntegerField()
    max_terms = models.SmallIntegerField()
    min_monthly_payment = models.DecimalField(max_digits=7, decimal_places=2)
    min_quarterly_payment = models.DecimalField(max_digits=7, decimal_places=2)
    min_yearly_payment = models.DecimalField(max_digits=7, decimal_places=2)
    allow_deferments = models.BooleanField(default=True)
    allow_cancellations = models.BooleanField(default=True)
    origination_fee = models.DecimalField(max_digits=7, decimal_places=2)
    initial_status = models.ForeignKey(to='structures.Status')
    accrual_method = models.CharField(max_length=1, choices=ACCRUAL_METHOD)

    class Meta:
        db_table = "loan_type"
        verbose_name_plural = "Loan Types Book"
