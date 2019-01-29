from django.db import models


class Player(models.Model):
    birth_date = models.DateField()
    height = models.IntegerField()
    weight = models.IntegerField()
    nationality = models.CharField(max_length=50)
    is_basketball = models.BooleanField(null=False)
    photo = models.ImageField(blank=True, upload_to='players/images')


class Person(models.Model):
    first_name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    position = models.CharField(max_length=50)
    player = models.OneToOneField('player.Player', null=True, on_delete=models.CASCADE, blank=True)
    team = models.ForeignKey('team.Team', on_delete=models.CASCADE, null=True, blank=True)
