from django.db import models
from django.utils import timezone

type_choices = [('goal', 'گل'), ('goal_opportunity', 'موقعیت گل'), ('yellow_card', 'کارت زرد'), ('red_card', 'کارت قرمز'), ('assist', 'پاس گل'), ('2_score_goal', 'پرتاب 2 امتیازی'), ('3_score_goal', 'پرتاب 3 امتیازی'), ('foul', 'خطا'), ('rebound', 'ریباند'), ('substitution', 'تعویض'), ('penalty', 'پنالتی')]


class Game(models.Model):
    home = models.ForeignKey('team.Team', on_delete=models.CASCADE, related_name='home_team')
    away = models.ForeignKey('team.Team', on_delete=models.CASCADE, related_name='away_team')
    week = models.IntegerField(null=False)
    league = models.ForeignKey('league.LeagueSeason', on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)

    home_players = models.ManyToManyField('player.Player', related_name='home_players')
    away_players = models.ManyToManyField('player.Player', related_name='away_players')


class GameEvent(models.Model):
    team = models.ForeignKey('team.Team', on_delete=models.CASCADE)
    type = models.CharField(choices=type_choices, max_length=50)
    player = models.ForeignKey('player.Player', on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    half_or_quarter = models.IntegerField()
    minute = models.IntegerField()


