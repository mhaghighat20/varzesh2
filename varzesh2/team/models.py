from django.db import models

from varzesh2.player.models import Player


class Person(models.Model):
    role = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    player = models.OneToOneField(Player, null=True, on_delete=models.CASCADE)


class Team(models.Model):
    name = models.CharField(max_length=100, null=False)
    photo = models.ImageField(upload_to='frontend/Content/teams/', null=False)
    players = models.ForeignKey(Player, on_delete=models.CASCADE)
    personnel = models.ForeignKey(Person, on_delete=models.CASCADE)



