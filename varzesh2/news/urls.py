from django.urls import path

from news import views

urlpatterns = [
    path('by_id/<int:news_id>/<int:load_description>/', views.get_news_by_id),
    path('by_game_id/<int:game_id>/', views.get_related_news_by_game_id),
    path('by_team_id/<int:team_id>/', views.get_related_news_by_team_id),
    path('by_player_id/<int:player_id>/', views.get_related_news_by_player_id),
    path('latest/<int:_from>/<int:size>/<int:is_basketball>/<int:isfavorite>/', views.get_latest_new)
]
