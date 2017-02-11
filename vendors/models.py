from __future__ import unicode_literals

from django.db import models
from edsi_portal.models import BaseModel


# Tran Code model
# ------------
# This table defines the transaction codes table
class Agency(BaseModel, models.Model):
    """
    Transaction codes
    """
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50, null=False, blank=False)
    person = models.ForeignKey(to='structures.Person', related_name='+')
    contact = models.ForeignKey(to='structures.Person', null=True, related_name='+')

    class Meta:
        db_table = "coll_agency"
        verbose_name_plural = "Collection Agency Book"
