import datetime
import json

from django.db.models import Count
from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import get_object_or_404

from accounts.models import Authentication, ExtendedUser
from game.models import GameEvent
from news.models import News
from player.models import Player, Person


def get_player_by_id(request, player_id):
    player = get_object_or_404(Player, id=player_id)
    age = int((datetime.datetime.today().date() - player.birth_date).days / 365)

    result = {
        'firstName': player.person.first_name,
        'lastName': player.person.last_name,
        'age': str(age),
        'height': player.height,
        'weight': player.weight,
        'nationality': player.nationality,
        'position': player.person.position,
        'currentTeam': player.person.team.name
    }

    if player.photo:
        result['imagePath'] = player.photo.url

    response = json.dumps(result, ensure_ascii=False)
    return HttpResponse(response)


def get_related_news_ids_by_id(request, player_id):
    player = get_object_or_404(Player, id=player_id)
    result = list(player.related_news.values_list('id', flat=True))

    response = json.dumps(result, ensure_ascii=False)
    return HttpResponse(response)


def get_player_statistics_by_id(request, player_id):
    player = get_object_or_404(Player, id=player_id)
    game_events = GameEvent.objects.filter(player_id=player_id)
    if not player.is_basketball:
        statistics = {}
        stats = game_events.filter(type__in=['goal', 'assist', 'yellow_card', 'red_card'])\
            .values('game__league__year', 'type').annotate(count=Count('type'))

        for stat_item in stats:
            if stat_item['game__league__year'] not in statistics:
                statistics[stat_item['game__league__year']] = {}
            statistics[stat_item['game__league__year']][stat_item['type']] = stat_item['count']

        res = sorted(statistics.items(), key=lambda kv: kv[0], reverse=True)

        return HttpResponse(json.dumps(res))


def get_player_name_by_id(request, player_id):
    person_query = Person.objects.filter(player=player_id)
    if person_query.exists():
        person = person_query.first()
        response = {'name': person.first_name + ' ' + person.last_name}
        return HttpResponse(json.dumps(response, ensure_ascii=False))
    return HttpResponseNotFound('Such player do not exist')


def get_favorite_state(request, player_id):
    if 'logintoken' in request.COOKIES:
        login_token = request.COOKIES['logintoken']
        user = get_object_or_404(Authentication, auth_token=login_token).user
        extended_user = get_object_or_404(ExtendedUser, user=user)
        favorite = extended_user.favorite_players.filter(id=player_id).all()
        response = {'isFavorite': False}
        if favorite.exists():
            response['isFavorite'] = True
        return HttpResponse(json.dumps(response))
    return HttpResponse()


def toggle_favorite(request, player_id):
    login_token = request.COOKIES['logintoken']
    user = get_object_or_404(Authentication, auth_token=login_token).user
    extended_user = get_object_or_404(ExtendedUser, user=user)
    favorite = extended_user.favorite_players.filter(id=player_id).all()
    if favorite.exists():
        extended_user.favorite_players.remove(favorite.first())
    else:
        extended_user.favorite_players.add(get_object_or_404(Player, id=player_id))
        extended_user.save()
    return HttpResponse()
