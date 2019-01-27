

# Create your views here.
import json
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from news.models import News
from player.models import Player, Person


def get_player_by_id(request, player_id):
    player = get_object_or_404(Player, id=player_id)
    person = list(Person.objects.filter(player_id=player_id).all().values('first_name', 'last_name', 'position'));
    # personnel = list(Person.objects.filter(team_id=player_id).all().values('player__id', 'first_name', 'last_name', 'position'))

    result = {
        'birth_date': str(player.birth_date),
        'height': player.height,
        'weight': player.weight,
        'nationality': player.nationality,
        'person': person
    }

    if player.photo:
        result['photo'] = player.photo.path

    response = json.dumps(result, ensure_ascii=False)
    return HttpResponse(response)


def get_related_news_by_id(request, player_id):
    player = get_object_or_404(Player, id=player_id)

    result = list(News.objects.filter(related_players__id=player_id).values('id', 'title'))

    response = json.dumps(result, ensure_ascii=False)
    return HttpResponse(response)


