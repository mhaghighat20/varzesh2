# Generated by Django 2.1.5 on 2019-01-29 19:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0004_auto_20190129_1353'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='person',
            options={'verbose_name': 'شخص', 'verbose_name_plural': 'اشخاص'},
        ),
        migrations.AlterModelOptions(
            name='player',
            options={'verbose_name': 'بازیکن', 'verbose_name_plural': 'بازیکن\u200cها'},
        ),
    ]
