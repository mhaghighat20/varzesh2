from django.db import models

from varzesh2.team.models import Team


class Player(models.Model):
    first_name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    birth_date = models.DateField()
    height = models.IntegerField()
    weight = models.IntegerField()
    current_team = models.OneToOneField(Team, on_delete=models.CASCADE)
    nationality = models.CharField(max_length=50)
    position = models.CharField(max_length=30)
    is_basketball = models.BooleanField(null=False)


