# Generated by Django 2.1.5 on 2019-01-29 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0002_auto_20190125_2223'),
    ]

    operations = [
        migrations.AddField(
            model_name='gameevent',
            name='half_or_quarter',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
