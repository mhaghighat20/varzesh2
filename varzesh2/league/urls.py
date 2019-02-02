from django.urls import path
from league import views

urlpatterns = [
    path('statistics/<int:league_id>/', views.get_league_statistics_by_id),
    path('games_by_week/<int:league_id>/<int:week>/', views.get_games_by_week),
    path('get_all_leagues/', views.get_all_leagues),
    path('weeks/<int:league_id>/', views.get_league_weeks)
]
