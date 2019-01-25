from django.db import models


class LeagueSeason(models.Model):
    name = models.CharField(max_length=100)
    year = models.CharField(max_length=50)
    is_basketball = models.BooleanField()
