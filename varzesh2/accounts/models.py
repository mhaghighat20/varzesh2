from django.contrib.auth.models import User
from django.db import models


class Authentication(models.Model):
    auth_token = models.CharField(max_length=100, verbose_name='توکن امنیتی')
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='کاربر')
    creation_date = models.DateTimeField('تاریخ ایجاد')


class ExtendedUser(models.Model):
    class Meta:
        verbose_name = 'اطلاعات کاربر'
        verbose_name_plural = 'اطلاعات کاربر'

    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE, verbose_name='کاربر')
    favorite_teams = models.ManyToManyField('team.Team', blank=True, verbose_name='تیم‌های مورد علاقه')
    favorite_players = models.ManyToManyField('player.Player', blank=True, verbose_name='بازیکنان مورد علاقه')
    favorite_games = models.ManyToManyField('game.Game', blank=True, verbose_name='بازی‌های مورد علاقه')

