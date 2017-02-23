# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2017-02-05 04:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('structures', '0007_country_state'),
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(editable=False)),
                ('modified', models.DateTimeField(editable=False)),
                ('created_by', models.IntegerField(null=True)),
                ('tax_id', models.CharField(max_length=15, null=True)),
                ('account', models.CharField(max_length=50)),
                ('name', models.CharField(max_length=50)),
                ('first_name', models.CharField(max_length=50, null=True)),
                ('middle_name', models.CharField(max_length=50, null=True)),
                ('maiden_name', models.CharField(max_length=50, null=True)),
                ('address1', models.CharField(blank=True, max_length=50)),
                ('address2', models.CharField(blank=True, max_length=50, null=True)),
                ('address3', models.CharField(blank=True, max_length=50, null=True)),
                ('city', models.CharField(blank=True, max_length=50, null=True)),
                ('postal_code', models.CharField(blank=True, max_length=10, null=True)),
                ('home_phone', models.CharField(max_length=20, null=True)),
                ('work_phone', models.CharField(max_length=20, null=True)),
                ('mobile_phone', models.CharField(max_length=20, null=True)),
                ('fax', models.CharField(max_length=20, null=True)),
                ('email1', models.CharField(max_length=80, null=True)),
                ('email2', models.CharField(max_length=80, null=True)),
                ('dob', models.DateField(null=True)),
                ('valid_address', models.BooleanField()),
                ('valid_home_phone', models.BooleanField()),
                ('valid_work_phone', models.BooleanField()),
                ('valid_mobile_phone', models.BooleanField()),
                ('country', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='structures.Country')),
                ('entity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='structures.Entity')),
                ('state', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='structures.State')),
            ],
            options={
                'db_table': 'person',
                'verbose_name_plural': 'Person Book',
            },
        ),
    ]