# Generated by Django 2.1.3 on 2019-01-25 18:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0002_player_photo'),
        ('game', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='game',
            name='game_events',
        ),
        migrations.AddField(
            model_name='gameevent',
            name='game',
            field=models.ForeignKey(default=100, on_delete=django.db.models.deletion.CASCADE, to='game.Game'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='game',
            name='away',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='away_team', to='team.Team'),
        ),
        migrations.RemoveField(
            model_name='game',
            name='away_players',
        ),
        migrations.AddField(
            model_name='game',
            name='away_players',
            field=models.ManyToManyField(related_name='away_players', to='player.Player'),
        ),
        migrations.AlterField(
            model_name='game',
            name='home',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='home_team', to='team.Team'),
        ),
        migrations.RemoveField(
            model_name='game',
            name='home_players',
        ),
        migrations.AddField(
            model_name='game',
            name='home_players',
            field=models.ManyToManyField(related_name='home_players', to='player.Player'),
        ),
        migrations.AlterField(
            model_name='game',
            name='league',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='league.LeagueSeason'),
        ),
        migrations.AlterField(
            model_name='gameevent',
            name='player',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='player.Player'),
        ),
        migrations.AlterField(
            model_name='gameevent',
            name='team',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='team.Team'),
        ),
    ]