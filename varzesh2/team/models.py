from django.db import models


class Team(models.Model):
    class Meta:
        verbose_name_plural = 'تیم‌ها'
        verbose_name = 'تیم'

    name = models.CharField(max_length=100, null=False)
    photo = models.ImageField(upload_to='teams/images', null=True, blank=True)
    is_basketball = models.BooleanField()

    def __str__(self):
        return self.name



