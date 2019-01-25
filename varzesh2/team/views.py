# Create your views here.
import json

from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404

from news.models import Team


def get_news_by_id(request, team_id):
    team = get_object_or_404(Team, id=team_id)
    result = {
        'title': team.title,
        'personnel': team.personnel,
    }

    if team.photo:
        result['photo'] =team.photo.path

    response = json.dumps(result, ensure_ascii=False)
    return HttpResponse(response)

