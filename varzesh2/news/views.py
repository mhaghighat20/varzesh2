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

