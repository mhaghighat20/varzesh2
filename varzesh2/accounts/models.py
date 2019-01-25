from django.contrib.auth.models import User
from django.db import models

from varzesh2.game.models import Game
from varzesh2.player.models import Player
from varzesh2.team.models import Team


class ExtendedUser(models.Model):
    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    avatar = models.ImageField(upload_to='accounts/images', null=True)
    favorite_teams = models.ForeignKey(Team, on_delete=models.CASCADE)
    favorite_players = models.ForeignKey(Player, on_delete=models.CASCADE)
    favorite_games = models.ForeignKey(Game, on_delete=models.CASCADE)
