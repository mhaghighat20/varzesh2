from django.db import models


class News(models.Model):
    class Meta:
        verbose_name_plural = 'News'

    title = models.CharField(max_length=200, null=False)
    text = models.TextField(null=False)
    photo = models.ImageField(upload_to='frontend/Content/news/images/%Y/%m/%d/')
    pub_date = models.DateTimeField('date published', null=False)
    source = models.CharField(max_length=200)
    video = models.FileField(upload_to='frontend/Content/news/videos/%Y/%m/%d/')
    related_players = models.ManyToManyField('player.Player')
    related_games = models.ForeignKey('game.Game', on_delete=models.CASCADE)
    related_teams = models.ManyToManyField('team.Team')

