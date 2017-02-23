from __future__ import unicode_literals

from django.db import models
from edsi_portal.models import NoSyncModel

TRAN_SOURCES = (
    ('S', 'System generated'),
    ('U', 'User generated'),
    ('B', 'Biller generated'),
    ('P', 'Payer generated'),
    ('C', 'Conversion'),
)


# History model
# ------------
# This table defines the borrower transaction history table
class History(NoSyncModel, models.Model):
    """
    Obligation table: This is the 'loan' splits
    """
    payer = models.ForeignKey(to='borrowers.Payer', null=False, related_name='+')
    obligation = models.ForeignKey(to='borrowers.Obligation', null=False, related_name='+')
    batch = models.BigIntegerField(db_index=True)
    sequence = models.SmallIntegerField()
    tran_code = models.ForeignKey(to='structures.TranCode', related_name='+')
    principal = models.DecimalField(max_digits=9, decimal_places=2, null=True)
    interest = models.DecimalField(max_digits=9, decimal_places=2, null=True)
    late_fee = models.DecimalField(max_digits=9, decimal_places=2, null=True)
    coll_fee = models.DecimalField(max_digits=9, decimal_places=2, null=True)
    lit_fee = models.DecimalField(max_digits=9, decimal_places=2, null=True)
    effective_date = models.DateField(db_index=True)
    thru_date = models.DateField(null=True)                                  # check date or cancel/defer end date
    reversed = models.BooleanField(default=False)
    reason = models.CharField(max_length=50, null=True)
    source_id = models.CharField(max_length=1, choices=TRAN_SOURCES)
    reference = models.IntegerField(null=True)                               # check nbr or cancel/defer nbr

    class Meta:
        db_table = "history"
        verbose_name_plural = "Transaction History"
        unique_together = [
            ['batch', 'sequence'],
        ]
