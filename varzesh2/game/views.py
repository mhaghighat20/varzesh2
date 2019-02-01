import datetime
import json

from django.db.models import Q, F
from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404
from django.utils import timezone

from accounts.models import Authentication, ExtendedUser
from game.models import Game, GameEvent
from news.models import News


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


def get_against_games(request, first_team_id, second_team_id):
    game_ids = list(Game.objects.filter((Q(home_id=first_team_id) & Q(away_id=second_team_id)) |
                                        (Q(home_id=second_team_id) & Q(away_id=first_team_id)))
                    .values_list('id', flat=True).all())
    return HttpResponse(json.dumps(game_ids, ensure_ascii=False))


def get_game_statistics(request, game_id):
    game = get_object_or_404(Game, id=game_id)

    response = {}
    response['home'] = {}
    response['away'] = {}
    response['goals'] = {}

    response['goals']['away'] = 0
    response['goals']['home'] = 0
    response['ballPossession'] = {}
    response['corners'] = {}
    response['fouls'] = {}
    response['goalOpportunities'] = {}
    response['yellowCards'] = {}
    response['redCards'] = {}
    response['bestPlayer'] = {'home': 0, 'away': 0}

    if not game.league.is_basketball:
        if game.best_player:
            response['best_player'] = None#game.best_player.value_list('firstname')

        response['ballPossession']['home'] = int(game.home_ball_possession * 100)
        response['ballPossession']['away'] = 100 - response['ballPossession']['home']

        game_events = GameEvent.objects.filter(game_id=game_id).all()
        response['corners']['home'] = 0
        response['corners']['away'] = 0

        response['fouls']['home'] = 0
        response['fouls']['away'] = 0

        response['goalOpportunities']['home'] = 0
        response['goalOpportunities']['away'] = 0

        response['yellowCards']['home'] = 0
        response['yellowCards']['away'] = 0

        response['redCards']['home'] = 0
        response['redCards']['away'] = 0



        home_game_events = game_events.filter(game_id=game.home_id)
        away_game_events = game_events.filter(game_id=game.away_id)

        return HttpResponse(json.dumps(response, ensure_ascii=False))


def get_game_players(request, game_id):
    game = get_object_or_404(Game, id=game_id)

    result = {
        'home': list(game.home_players.all().values_list('id', flat=True)),
        'away': list(game.away_players.all().values_list('id', flat=True))
    }

    return HttpResponse(json.dumps(result, ensure_ascii=False))


def get_related_news(request, game_id):
    game = get_object_or_404(Game, id=game_id)
    result = list(News.objects.filter(related_game__id=game_id).values_list('id', flat=True))

    return HttpResponse(json.dumps(result))


def get_related_media(request, game_id):
    game = get_object_or_404(Game, id=game_id)
    result = list(News.objects.filter(Q(video__isnull=False) & Q(related_game__id=game_id)).values_list('id', flat=True))

    return HttpResponse(json.dumps(result))


def get_events(request, game_id):
    game = get_object_or_404(Game, id=game_id)

    result = list(GameEvent.objects.filter(game_id=game_id))
    return HttpResponse(json.dumps(result))


def get_favorite_state(request, game_id):
    login_token = request.COOKIES['logintoken']
    user = get_object_or_404(Authentication, auth_token=login_token).user
    extended_user = get_object_or_404(ExtendedUser, user=user)
    favorite = extended_user.favorite_games.filter(id=game_id).all()
    response = {'isFavorite': False}
    if favorite.exists():
        response['isFavorite'] = True
    return HttpResponse(json.dumps(response))


def toggle_favorite(request, game_id):
    login_token = request.COOKIES['logintoken']
    user = get_object_or_404(Authentication, auth_token=login_token).user
    extended_user = get_object_or_404(ExtendedUser, user=user)
    favorite = extended_user.favorite_games.filter(id=game_id).all()
    if favorite.exists():
        extended_user.favorite_games.remove(favorite.first())
    else:
        extended_user.favorite_games.add(get_object_or_404(Game, id=game_id))
        extended_user.save()
    return HttpResponse()


def get_latest_games(request, is_basketball, is_favorite):
    if is_basketball == 1:
        is_basketball = True
    elif is_basketball == 0:
        is_basketball = False
    else:
        return HttpResponseBadRequest()
    if is_favorite == 1:
        is_favorite = True
    elif is_favorite == 0:
        is_favorite = False
    else:
        return HttpResponseBadRequest()
    games = Game.objects.filter(league__is_basketball=is_basketball).filter(date__gt=timezone.datetime.now() - datetime.timedelta(days=365))

    response = []
    for game in games:
        league_name = str(game.league)
        week = game.week
        game_id = game.id
        response.append({
            'leagueName': league_name,
            'week': 'هفته ' + str(week),
            'gameId': game_id
        })

    return HttpResponse(json.dumps(response, ensure_ascii=False))
