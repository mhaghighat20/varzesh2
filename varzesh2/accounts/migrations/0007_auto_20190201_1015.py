# Generated by Django 2.1.5 on 2019-02-01 10:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_authentication'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='extendeduser',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='extendeduser',
            name='last_name',
        ),
    ]
