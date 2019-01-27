import datetime
import json
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from news.models import News
from player.models import Player, Person


def get_player_by_id(request, player_id):
    player = get_object_or_404(Player, id=player_id)
    person = Person.objects.filter(player_id=player_id).first()
    age = int((datetime.datetime.today().date() - player.birth_date).days / 365)

    result = {
        'firstName': person.first_name,
        'lastName': person.last_name,
        'age': str(age),
        'height': player.height,
        'weight': player.weight,
        'nationality': player.nationality,
        'position': person.position,
        'currentTeam': person.team.name
    }

    if player.photo:
        result['imagePath'] = player.photo.url

    response = json.dumps(result, ensure_ascii=False)
    return HttpResponse(response)


def get_related_news_ids_by_id(request, player_id):
    result = list(News.objects.filter(related_players__id=player_id).values('id'))

    response = json.dumps(result, ensure_ascii=False)
    return HttpResponse(response)


