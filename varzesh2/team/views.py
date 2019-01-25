# Create your views here.
import json

from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from team.models import Team
from player.models import Person


def get_team_by_id(request, team_id):
    team = get_object_or_404(Team, id=team_id)
    personnel = list(Person.objects.filter(team_id=team_id).all().values('player__id', 'first_name', 'last_name', 'position'))

    result = {
        'name': team.name,
        'personnel': personnel,
    }

    if team.photo:
        result['photo'] = team.photo.path

    response = json.dumps(result, ensure_ascii=False)
    return HttpResponse(response)

