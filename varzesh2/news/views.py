import json

from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404

from news.models import News


def get_news_by_id(request, news_id, load_description):
    news = get_object_or_404(News, pk=news_id)
    result = {
        'title': news.title,
        'publishDate': news.pub_date,
        'photoPath': news.photo.path,
        'source': news.source,
        'videoPath': news.video.path,
                }
    if load_description == 1:
        result['text'] = news.text
    response = json.dumps(result, ensure_ascii=False)
    return HttpResponse(response)

