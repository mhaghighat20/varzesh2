import json

from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404

from news.models import News


def get_news_by_id(request, news_id, load_description):
    news = get_object_or_404(News, id=news_id)
    result = {
        'title': news.title,
        'publishDate': str(news.pub_date),
        'source': news.source,
    }
    if load_description == 1:
        result['text'] = news.text
    if news.photo:
        result['photoPath'] = news.photo.url
    if news.video:
        result['videoPath'] = news.video.url

    return HttpResponse(json.dumps(result, ensure_ascii=False))


def get_related_news_by_game_id(request, game_id):
    news_ids = list(News.objects.filter(related_game_id=game_id).values('id').all())
    return HttpResponse(json.dumps(news_ids))


def get_related_news_by_player_id(request, player_id):
    news_ids = list(News.objects.filter(related_players__id__contains=player_id).values('id').all())
    return HttpResponse(json.dumps(news_ids))


def get_related_news_by_team_id(request, team_id):
    news_ids = list(News.objects.filter(related_teams__id__contains=team_id).values('id').all())
    return HttpResponse(json.dumps(news_ids))


def get_latest_new(request, _from, size, is_basketball, isfavorite):
    if is_basketball == 0:
        is_basket_value = False
    else:
        is_basket_value = True

    news_ids = list(News.objects.filter(is_basketball=is_basket_value).values_list('id', flat=True).all()[_from:_from+size])
    return HttpResponse(json.dumps(news_ids))
