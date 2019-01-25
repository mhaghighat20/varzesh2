# Generated by Django 2.1.3 on 2019-01-25 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0002_player_photo'),
        ('team', '0002_auto_20190125_2152'),
        ('game', '0001_initial'),
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='extendeduser',
            name='favorite_games',
        ),
        migrations.AddField(
            model_name='extendeduser',
            name='favorite_games',
            field=models.ManyToManyField(to='game.Game'),
        ),
        migrations.RemoveField(
            model_name='extendeduser',
            name='favorite_players',
        ),
        migrations.AddField(
            model_name='extendeduser',
            name='favorite_players',
            field=models.ManyToManyField(to='player.Player'),
        ),
        migrations.RemoveField(
            model_name='extendeduser',
            name='favorite_teams',
        ),
        migrations.AddField(
            model_name='extendeduser',
            name='favorite_teams',
            field=models.ManyToManyField(to='team.Team'),
        ),
    ]
