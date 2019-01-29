# Generated by Django 2.1.5 on 2019-01-29 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20190125_2152'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='extendeduser',
            options={'verbose_name': 'اطلاعات کاربر', 'verbose_name_plural': 'اطلاعات کاربر'},
        ),
        migrations.AlterField(
            model_name='extendeduser',
            name='favorite_games',
            field=models.ManyToManyField(blank=True, null=True, to='game.Game'),
        ),
        migrations.AlterField(
            model_name='extendeduser',
            name='favorite_players',
            field=models.ManyToManyField(blank=True, null=True, to='player.Player'),
        ),
        migrations.AlterField(
            model_name='extendeduser',
            name='favorite_teams',
            field=models.ManyToManyField(blank=True, null=True, to='team.Team'),
        ),
    ]
