from django.db import models


class Team(models.Model):
    class Meta:
        verbose_name_plural = 'تیم‌ها'
        verbose_name = 'تیم'

    name = models.CharField(max_length=100, null=False, verbose_name='نام')
    photo = models.ImageField(upload_to='teams/images', null=True, blank=True, verbose_name='تصویر')
    related_news = models.ManyToManyField('news.News', blank=True, verbose_name='اخبار مرتبط')
    is_basketball = models.BooleanField(verbose_name='بسکتبال است')

    def __str__(self):
        return self.name



