from django.db.models import Q
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
import json

from game.models import Game
from league.models import LeagueFullStatistics, LeagueSeason


def get_league_statistics_by_id(request, league_id):
    league = get_object_or_404(LeagueSeason, id=league_id)
    result = LeagueFullStatistics.objects.filter(Q(league_season_id=league_id)).all()

    data = [{
            'title': item.team.name,
            'totalGames': item.game_count,
            'wins': item.wins,
            'draw': item.draw,
            'loses': item.lose,
            'goleZadeh': item.gole_zade,
            'goleKhordeh': item.gole_khorde,
            'tafazol': item.tafazol,
            'score': item.score
        }
        for item in result
    ]
    response = {'title': str(league), 'data': data}

    return HttpResponse(json.dumps(response))


def get_league_weeks(request, league_id):
    result = list(Game.objects.filter(league_id=league_id).values('week').distinct().values_list('week', flat=True))
    return HttpResponse(json.dumps(result))


def get_games_by_week(request, league_id, week):
    league = get_object_or_404(LeagueSeason, id=league_id)
    result = list(Game.objects.filter(Q(league_id=league_id) & Q(week=week)).all().values_list('id', flat=True))

    return HttpResponse(json.dumps(result))


def get_all_leagues(request):
    result = LeagueSeason.objects.all()

    response = [{'name': str(league), 'id': league.id} for league in result]

    return HttpResponse(json.dumps(response))
