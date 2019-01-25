# Generated by Django 2.1.3 on 2019-01-25 18:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0002_player_photo'),
        ('team', '0002_auto_20190125_2152'),
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='news',
            options={'verbose_name_plural': 'News'},
        ),
        migrations.AlterField(
            model_name='news',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='news/images/%Y/%m/%d/'),
        ),
        migrations.AlterField(
            model_name='news',
            name='related_games',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='game.Game'),
        ),
        migrations.RemoveField(
            model_name='news',
            name='related_players',
        ),
        migrations.AddField(
            model_name='news',
            name='related_players',
            field=models.ManyToManyField(blank=True, to='player.Player'),
        ),
        migrations.RemoveField(
            model_name='news',
            name='related_teams',
        ),
        migrations.AddField(
            model_name='news',
            name='related_teams',
            field=models.ManyToManyField(blank=True, to='team.Team'),
        ),
        migrations.AlterField(
            model_name='news',
            name='source',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='news',
            name='text',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='news',
            name='video',
            field=models.FileField(blank=True, null=True, upload_to='news/videos/%Y/%m/%d/'),
        ),
    ]