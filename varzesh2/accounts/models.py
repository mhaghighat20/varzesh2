from django.contrib.auth.models import User
from django.db import models


class ExtendedUser(models.Model):
    class Meta:
        verbose_name = 'اطلاعات کاربر'
        verbose_name_plural = 'اطلاعات کاربر'

    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE, verbose_name='کاربر')
    first_name = models.CharField(max_length=30, verbose_name='نام')
    last_name = models.CharField(max_length=30, verbose_name='نام خانوادگی')
    avatar = models.ImageField(upload_to='accounts/images', null=True, verbose_name='عکس پروفایل')
    favorite_teams = models.ManyToManyField('team.Team', blank=True, verbose_name='تیم‌های مورد علاقه')
    favorite_players = models.ManyToManyField('player.Player', blank=True, verbose_name='بازیکنان مورد علاقه')
    favorite_games = models.ManyToManyField('game.Game', blank=True, verbose_name='بازی‌های مورد علاقه')

