from django.db import models


class News(models.Model):
    class Meta:
        verbose_name_plural = 'اخبار'
        verbose_name = 'خبر'

    title = models.CharField(max_length=200)
    text = models.TextField(null=True)
    photo = models.ImageField(upload_to='news/images/%Y/%m/%d/', null=True, blank=True)
    pub_date = models.DateTimeField('date published', null=False)
    source = models.CharField(max_length=200, blank=True)
    video = models.FileField(upload_to='news/videos/%Y/%m/%d/', null=True, blank=True)
    related_players = models.ManyToManyField('player.Player', blank=True)
    related_game = models.ForeignKey('game.Game', on_delete=models.CASCADE, null=True, blank=True)
    related_teams = models.ManyToManyField('team.Team', blank=True)
    is_basketball = models.BooleanField()

