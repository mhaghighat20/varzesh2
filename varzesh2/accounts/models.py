from django.contrib.auth.models import User
from django.db import models


class ExtendedUser(models.Model):
    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    avatar = models.ImageField(upload_to='accounts/images', null=True)
    favorite_teams = models.ForeignKey('team.Team', on_delete=models.CASCADE)
    favorite_players = models.ForeignKey('player.Player', on_delete=models.CASCADE)
    favorite_games = models.ForeignKey('game.Game', on_delete=models.CASCADE)
