from django.db import models


class News(models.Model):
    class Meta:
        verbose_name_plural = 'اخبار'
        verbose_name = 'خبر'

    title = models.CharField(max_length=200, verbose_name='تیتر')
    text = models.TextField(null=True, verbose_name='شرخ خبر')
    photo = models.ImageField(upload_to='news/images/%Y/%m/%d/', null=True, blank=True, verbose_name='تصویر')
    pub_date = models.DateTimeField(null=False, verbose_name='تاریخ انتشار')
    source = models.CharField(max_length=200, blank=True, verbose_name='منبع')
    video = models.FileField(upload_to='news/videos/%Y/%m/%d/', null=True, blank=True, verbose_name='ویدیو')
    related_game = models.ForeignKey('game.Game', on_delete=models.CASCADE, null=True, blank=True, verbose_name='بازی مرتبط')
    related_teams = models.ManyToManyField('team.Team', blank=True, verbose_name='تیم‌های مرتبط')
    is_basketball = models.BooleanField(verbose_name='بسکتبال است')

