# Generated by Django 2.1.5 on 2019-01-25 12:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('player', '0001_initial'),
        ('team', '0001_initial'),
        ('league', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('week', models.IntegerField()),
                ('away', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='away_team', to='team.Team')),
                ('away_players', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='away_players', to='player.Player')),
            ],
        ),
        migrations.CreateModel(
            name='GameEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('goal', 'گل'), ('goal_opportunity', 'موقعیت گل'), ('yellow_card', 'کارت زرد'), ('red_card', 'کارت قرمز'), ('assist', 'پاس گل'), ('2_score_goal', 'پرتاب 2 امتیازی'), ('3_score_goal', 'پرتاب 3 امتیازی'), ('foul', 'خطا'), ('rebound', 'ریباند'), ('substitution', 'تعویض'), ('penalty', 'پنالتی')], max_length=50)),
                ('player', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='player.Player')),
                ('team', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='team.Team')),
            ],
        ),
        migrations.AddField(
            model_name='game',
            name='game_events',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='game.GameEvent'),
        ),
        migrations.AddField(
            model_name='game',
            name='home',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='home_team', to='team.Team'),
        ),
        migrations.AddField(
            model_name='game',
            name='home_players',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='home_players', to='player.Player'),
        ),
        migrations.AddField(
            model_name='game',
            name='league',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='league.LeagueSeason'),
        ),
    ]