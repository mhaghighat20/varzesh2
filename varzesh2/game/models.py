from django.db import models


type_choices = [('goal', 'گل'), ('goal_opportunity', 'موقعیت گل'), ('yellow_card', 'کارت زرد'), ('red_card', 'کارت قرمز'), ('assist', 'پاس گل'), ('2_score_goal', 'پرتاب 2 امتیازی'), ('3_score_goal', 'پرتاب 3 امتیازی'), ('foul', 'خطا'), ('rebound', 'ریباند'), ('substitution', 'تعویض'), ('penalty', 'پنالتی')]


class GameEvent(models.Model):
    team = models.OneToOneField('team.Team', on_delete=models.CASCADE)
    type = models.CharField(choices=type_choices, max_length=50)
    player = models.OneToOneField('player.Player', on_delete=models.CASCADE)


class Game(models.Model):
    home = models.OneToOneField('team.Team', on_delete=models.CASCADE, related_name='home_team')
    away = models.OneToOneField('team.Team', on_delete=models.CASCADE, related_name='away_team')
    week = models.IntegerField(null=False)
    league = models.OneToOneField('league.LeagueSeason', on_delete=models.CASCADE)
    game_events = models.ForeignKey(GameEvent, on_delete=models.CASCADE)
    home_players = models.ForeignKey('player.Player', on_delete=models.CASCADE, related_name='home_players')
    away_players = models.ForeignKey('player.Player', on_delete=models.CASCADE, related_name='away_players')

