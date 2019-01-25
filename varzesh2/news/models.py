from django.db import models

from varzesh2.game.models import Game
from varzesh2.player.models import Player
from varzesh2.team.models import Team


class News(models.Model):
    title = models.CharField(max_length=200, null=False)
    text = models.TextField(null=False)
    photo = models.ImageField(upload_to='frontend/Content/news/images/%Y/%m/%d/')
    pub_date = models.DateTimeField('date published', null=False)
    source = models.CharField(max_length=200)
    video = models.FileField(upload_to='frontend/Content/news/videos/%Y/%m/%d/')
    related_players = models.ForeignKey(Player, on_delete=models.CASCADE)
    related_games = models.ForeignKey(Game, on_delete=models.CASCADE)
    related_teams = models.ForeignKey(Team, on_delete=models.CASCADE)

