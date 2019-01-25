from django.db import models


class Player(models.Model):
    first_name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    birth_date = models.DateField()
    height = models.IntegerField()
    weight = models.IntegerField()
    nationality = models.CharField(max_length=50)
    position = models.CharField(max_length=30)
    is_basketball = models.BooleanField(null=False)
    photo = models.ImageField(blank=True, upload_to='players/images')


