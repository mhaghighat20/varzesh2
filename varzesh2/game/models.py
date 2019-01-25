from django.db import models

from varzesh2.league.models import LeagueSeason
from varzesh2.player.models import Player
from varzesh2.team.models import Team


type_choices = ['goal', 'yellow_card', 'red_card', 'assist', '2_score_goal', '3_score_goal', 'foul', 'rebound', 'substitution', 'penalty']


class GameEvent(models.Model):
    team = models.OneToOneField(Team, on_delete=models.CASCADE)
    type = models.CharField(choices=type_choices)
    player = models.OneToOneField(Player, on_delete=models.CASCADE)


class Game(models.Model):
    home = models.OneToOneField(Team, on_delete=models.CASCADE)
    away = models.OneToOneField(Team, on_delete=models.CASCADE)
    week = models.IntegerField(null=False)
    league = models.OneToOneField(LeagueSeason, on_delete=models.CASCADE)
    game_events = models.ForeignKey(GameEvent, on_delete=models.CASCADE)
    home_players = models.ForeignKey(Player, on_delete=models.CASCADE)
    away_players = models.ForeignKey(Player, on_delete=models.CASCADE)

