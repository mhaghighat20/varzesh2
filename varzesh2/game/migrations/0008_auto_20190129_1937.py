# Generated by Django 2.1.5 on 2019-01-29 19:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0007_auto_20190129_1406'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='game',
            options={'verbose_name': 'بازی', 'verbose_name_plural': 'بازی\u200cها'},
        ),
        migrations.AlterModelOptions(
            name='gameevent',
            options={'verbose_name': 'رخداد', 'verbose_name_plural': 'رخدادها'},
        ),
    ]
