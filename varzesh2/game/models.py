from django.db import models
from django.utils import timezone

from player.models import Player

type_choices = [('goal', 'گل'), ('goal_opportunity', 'موقعیت گل'), ('yellow_card', 'کارت زرد'), ('red_card', 'کارت قرمز'),
                ('assist', 'پاس گل'),('2_score_goal', 'پرتاب 2 امتیازی'), ('3_score_goal', 'پرتاب 3 امتیازی'),
                ('foul', 'خطا'), ('rebound', 'ریباند'), ('substitution', 'تعویض'), ('penalty', 'پنالتی'),
                ('corner', 'کرنر')]


class Game(models.Model):
    class Meta:
        verbose_name_plural = 'بازی‌ها'
        verbose_name = 'بازی'

    home = models.ForeignKey('team.Team', on_delete=models.CASCADE, related_name='home_team', verbose_name='میزبان')
    away = models.ForeignKey('team.Team', on_delete=models.CASCADE, related_name='away_team', verbose_name='میهمان')
    week = models.IntegerField(null=False, verbose_name='هفته')
    league = models.ForeignKey('league.LeagueSeason', on_delete=models.CASCADE, verbose_name='لیگ')
    date = models.DateTimeField(default=timezone.now, verbose_name='تاریخ برگزاری')
    win_or_lose = models.IntegerField(default='0', verbose_name='وضعیت')

    home_players = models.ManyToManyField('player.Player', related_name='home_players',
                                          verbose_name='بازیکنان تیم میزبان')
    away_players = models.ManyToManyField('player.Player', related_name='away_players',
                                          verbose_name='بازیکنان تیم میهمان')
    home_ball_possession = models.FloatField(verbose_name='مالکیت توپ میزبان', null=True, blank=True)
    best_player = models.ForeignKey(Player, on_delete=models.CASCADE, verbose_name='بهترین بازیکن میدان',
                                       null=True, blank=True)


class GameEvent(models.Model):
    class Meta:
        verbose_name_plural = 'رخدادها'
        verbose_name = 'رخداد'

    team = models.ForeignKey('team.Team', on_delete=models.CASCADE, verbose_name='تیم')
    type = models.CharField(choices=type_choices, max_length=50, verbose_name='نوع رخداد')
    player = models.ForeignKey('player.Player', on_delete=models.CASCADE, verbose_name='بازیکن')
    game = models.ForeignKey(Game, on_delete=models.CASCADE, verbose_name='بازی')
    half_or_quarter = models.IntegerField(verbose_name='نیمه/کوارتر')
    minute = models.IntegerField(verbose_name='دقیقه')


