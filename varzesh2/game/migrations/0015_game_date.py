# Generated by Django 2.1.5 on 2019-02-02 08:57

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0014_auto_20190202_0856'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='تاریخ برگزاری'),
        ),
    ]
