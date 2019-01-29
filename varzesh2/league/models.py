from django.db import models


class LeagueSeason(models.Model):
    class Meta:
        verbose_name_plural = 'لیگ‌ها'
        verbose_name = 'لیگ'

    name = models.CharField(max_length=100)
    year = models.CharField(max_length=50)
    is_basketball = models.BooleanField()
