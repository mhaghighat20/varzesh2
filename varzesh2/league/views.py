from django.db.models import Q
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
import json

from game.models import Game
from league.models import LeagueFullStatistics, LeagueSeason


def get_league_by_id(request, league_id):
    league = get_object_or_404(LeagueSeason, id=league_id)
    result = list(LeagueFullStatistics.objects.filter(Q(leagueSeason_id=league_id)).first())

    return HttpResponse(json.dumps(result))


def get_games_by_week(request, league_id, week):
    league = get_object_or_404(LeagueSeason, id=league_id)
    result = list(Game.objects.filter(Q(league_id=league_id) & Q(week=week)).all())

    return HttpResponse(json.dumps(result))


def get_all_leagues(request):
    result = LeagueSeason.objects.all()

    return HttpResponse(json.dump(result))
