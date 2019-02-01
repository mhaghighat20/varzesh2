from django.db import models


class LeagueSeason(models.Model):
    class Meta:
        verbose_name_plural = 'لیگ‌ها'
        verbose_name = 'لیگ'

    name = models.CharField(max_length=100, verbose_name='نام')
    year = models.CharField(max_length=50, verbose_name='سال')
    is_basketball = models.BooleanField(verbose_name='بسکتبال است')

    def __str__(self):
        my_year = self.year[2:]
        return self.name + ' ' + my_year


class LeagueFullStatistics:
    team = models.ForeignKey('team.Team', on_delete=models.CASCADE, verbose_name='تیم')
    leagueSeason = models.ForeignKey('league.LeagueSeason', on_delete=models.CASCADE, verbose_name='فصل')

    game_count = models.IntegerField(verbose_name='تعداد بازی')
    wins = models.IntegerField(verbose_name='برد')
    draw = models.IntegerField(verbose_name='مساوی')
    lose = models.IntegerField(verbose_name='باخت')

    gole_zade = models.IntegerField(verbose_name='گل زده')
    gole_khorde = models.IntegerField(verbose_name='گل خورده')
    tafazol = models.IntegerField(verbose_name='تفاضل')
    score = models.IntegerField(verbose_name='امتیاز')




