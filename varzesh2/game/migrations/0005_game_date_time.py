# Generated by Django 2.1.5 on 2019-01-29 14:02

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0004_gameevent_minute'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='date_time',
            field=models.DateTimeField(default=datetime.datetime(2019, 1, 29, 14, 2, 9, 836319)),
        ),
    ]
