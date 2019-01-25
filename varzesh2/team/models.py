from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=100, null=False)
    photo = models.ImageField(upload_to='teams/images', null=True, blank=True)
    is_basketball = models.BooleanField()



