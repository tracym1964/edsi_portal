from __future__ import unicode_literals

from django.db import models
from edsi_portal.models import NoSyncModel, BaseModel


PAYMENT_TERMS = (
    ('W', 'Weekly'),
    ('B', 'Bi-weekly'),
    ('M', 'Monthly'),
    ('2', 'Bi-monthly'),
    ('Q', 'Quarterly'),
    ('S', 'Semi-annually'),
    ('Y', 'Yearly'),
)

INTEREST_TYPES = (
    ('A', 'Interest added on'),
    ('I', 'Included in payment'),
    ('O', 'Interest only'),
    ('N', 'Non interest bearing')
)

BILLING_TYPES = (
    ('P', 'Paper statement'),
    ('E', 'Electronic notification'),
    ('A', 'Automatic withdrawal'),
    ('C', 'Coupon'),
    ('T', 'Text message'),
)


# Payer model
# ------------
# This table defines the payer/borrower table which aggregates account/loan details
# into a consolidated billing.
class Payer(NoSyncModel, models.Model):
    """
    Billing consolidation table
    """
    person = models.ForeignKey(to='Entity', null=False)
    cosigner = models.ForeignKey(to='Entity', null=True)
    biller = models.ForeignKey(to='Biller', null=False)
    fund = models.ForeignKey(to='Fund', null=False)
    account = models.CharField(max_length=50, null=False, blank=False)
    principal_freq = models.CharField(max_length=1, choices=PAYMENT_TERMS)
    interest_freq = models.CharField(max_length=1, choices=PAYMENT_TERMS)
    interest_type = models.CharField(max_length=1, choices=INTEREST_TYPES)
    billing_type = models.CharField(max_length=1, choices=BILLING_TYPES)
    next_bill_date = models.DateField(null=False)
    hold_bill_until = models.DateField(null=True)
    min_pay = models.DecimalField(max_digits=7, decimal_places=2)
    temp_min_pay = models.CharField(max_digits=7, decimal_places=2)
    temp_min_pay_until = models.DateField(null=True)
    last_activity = models.DateTimeField()
    last_payment_date = models.DateField()
    last_payment_amount = models.DecimalField(max_digits=9, decimal_places=2)
    credit_bureau_report = models.BooleanField(default=False)
    collection_agency = models.ForeignKey(to='Agency', null=True)
    cycle_day = models.SmallIntegerField(default=1)
    past_due_cnt_15 = models.SmallIntegerField()
    past_due_cnt_30 = models.SmallIntegerField()
    past_due_cnt_60 = models.SmallIntegerField()
    past_due_cnt_90 = models.SmallIntegerField()
    past_due_cnt_120 = models.SmallIntegerField()

    class Meta:
        db_table = "payer"
        verbose_name_plural = "Payer Book"


# Obligation model
# ------------
# This table defines the payer/borrower table which aggregates account/loan details
# into a consolidated billing.
class Obligation(NoSyncModel, models.Model):
    """
    Obligation table: This is the 'loan' splits
    """
    payer = models.ForeignKey(to='Payer', null=False)
    sequence = models.SmallIntegerField()
    loan_type = models.ForeignKey(to='LoanType', max_length=5)
    status = models.ForeignKey(to='Status')
    status_expires = models.DateField(null=True)
    interest_rate = models.FloatField()
    payment_split = models.DecimalField(max_digits=7, decimal_places=2)
    original_principal = models.DecimalField(max_digits=9, decimal_places=2)
    principal_paid_ltd = models.DecimalField(max_digits=9, decimal_places=2)
    principal_cancelled_ltd = models.DecimalField(max_digits=9, decimal_places=2)
    principal_due = models.DecimalField(max_digits=9, decimal_places=2)
    principal_past_due = models.DecimalField(max_digits=9, decimal_places=2)
    interest_due = models.DecimalField(max_digits=9, decimal_places=2)
    interest_past_due = models.DecimalField(max_digits=9, decimal_places=2)
    interest_paid_ltd = models.DecimalField(max_digits=9, decimal_places=2)
    interest_cancelled_ltd = models.DecimalField(max_digits=9, decimal_places=2)
    interest_accrued = models.DecimalField(max_digits=11, decimal_places=5)
    interest_capitalized_ltd = models.DecimalField(max_digits=9, decimal_places=2)
    late_fee_due = models.DecimalField(max_digits=7, decimal_places=2)
    late_fee_paid_ltd = models.DecimalField(max_digits=7, decimal_places=2)
    collection_fee_due = models.DecimalField(max_digits=7, decimal_places=2)
    collection_fee_paid_ltd = models.DecimalField(max_digits=7, decimal_places=2)
    litigation_fee_due = models.DecimalField(max_digits=7, decimal_places=2)
    litigation_fee_paid_ltd = models.DecimalField(max_digits=7, decimal_places=2)
    service_fee_due = models.DecimalField(max_digits=7, decimal_places=2)
    service_fee_paid_ltd = models.DecimalField(max_digits=7, decimal_places=2)
    payoff = models.DecimalField(max_digits=9, decimal_places=2)
    date_opened = models.DateTimeField()
    date_separated = models.DateTimeField(null=True)
    date_first_payment = models.DateField(null=True)
    principal_next_due = models.DateField()
    interest_next_due = models.DateField()
    date_last_accrual = models.DateField(null=True)
    number_terms = models.SmallIntegerField()
    number_terms_remaining = models.SmallIntegerField()
    days_past_due = models.SmallIntegerField()
    date_principal_changed = models.DateField()
    date_status_changed = models.DateField()
    date_closed = models.DateField(null=True)
    closed_code = models.ForeignKey(to='TranCode', null=True)

    class Meta:
        db_table = "obligation"
        verbose_name_plural = "Obligations Book"
