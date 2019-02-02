import json

from django.db.models import Q
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from accounts.models import Authentication, ExtendedUser
from game.models import Game
from news.models import News
from team.models import Team
from player.models import Person


def get_team_by_id(request, team_id):
    team = get_object_or_404(Team, id=team_id)
    personnel = list(Person.objects.filter(team_id=team_id).all().values('player__id', 'first_name', 'last_name', 'position'))
    related_news = list(team.related_news.values_list('id', flat=True))

    members = []
    for person in personnel:
        members.append({
            'playerId': person['player__id'],
            'firstName': person['first_name'],
            'lastName': person['last_name'],
            'position': person['position']
        })

    result = {
        'name': team.name,
        'members': members,
        'newsIds': related_news,
    }

    if team.photo:
        result['photoPath'] = team.photo.url

    response = json.dumps(result, ensure_ascii=False)
    return HttpResponse(response)


def get_sorted_games(request, team_id, sort_mode):
    if sort_mode == 2:
        games = list(Game.objects.filter(Q(home__id=team_id) | Q(away__id=team_id))
                     .order_by('win_or_lose').all().values_list('id', flat=True))
    elif sort_mode == 3:
        games = list(Game.objects.filter(Q(home__id=team_id) | Q(away__id=team_id)).order_by('away_id').all()
                     .values_list('id', flat=True))
    else:
        games = list(Game.objects.filter(Q(home__id=team_id) | Q(away__id=team_id)).order_by('-date').all()
                     .values_list('id', flat=True))

    response = json.dumps(games, ensure_ascii=False)
    return HttpResponse(response)


def get_team_name_by_id(request, team_id):
    team = get_object_or_404(Team, id=team_id)
    response = {'name': team.name}
    return HttpResponse(json.dumps(response, ensure_ascii=False))


def get_favorite_state(request, team_id):
    login_token = request.COOKIES['logintoken']
    user = get_object_or_404(Authentication, auth_token=login_token).user
    extended_user = get_object_or_404(ExtendedUser, user=user)
    favorite = extended_user.favorite_teams.filter(id=team_id).all()
    response = {'isFavorite': False}
    if favorite.exists():
        response['isFavorite'] = True
    return HttpResponse(json.dumps(response))


def toggle_favorite(request, team_id):
    login_token = request.COOKIES['logintoken']
    user = get_object_or_404(Authentication, auth_token=login_token).user
    extended_user = get_object_or_404(ExtendedUser, user=user)
    favorite = extended_user.favorite_teams.filter(id=team_id).all()
    if favorite.exists():
        extended_user.favorite_teams.remove(favorite.first())
    else:
        extended_user.favorite_teams.add(get_object_or_404(Team, id=team_id))
        extended_user.save()
    return HttpResponse()
