import datetime
import json
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.utils import timezone
from game.models import Game, GameEvent


def get_game_details(request, game_id):
    game = get_object_or_404(Game, id=game_id)
    game_events = GameEvent.objects.filter(game__id=game_id).filter(type='goal').values('team_id').all()

    home_goals = 0
    away_goals = 0
    for event in game_events:
        if event['team_id'] == game.away.id:
            away_goals += 1
        elif event['team_id'] == game.home.id:
            home_goals += 1

    has_been_held = False
    # TODO something about this, maybe the game is not over yet

    if timezone.make_aware(datetime.datetime.now(), timezone.get_default_timezone()) > game.date:
        has_been_held = True

    response = {
        'awayTeamId': game.away.id,
        'homeTeamId': game.home.id,
        'homeGoals': home_goals,
        'awayGoals': away_goals,
        'date': str(game.date.date()),
        'hasBeenHeld': has_been_held,
        'isBasketball': game.league.is_basketball
    }
    return HttpResponse(json.dumps(response, ensure_ascii=False))
