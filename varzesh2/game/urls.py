from django.urls import path

from game import views

urlpatterns = [
    path('<int:game_id>/details/', views.get_game_details),
    path('against_games/<int:first_team_id>/<int:second_team_id>/', views.get_against_games),
    path('statistics/<int:game_id>/', views.get_game_statistics),
    path('players/<int:game_id>/', views.get_game_players),

    path('related_news/<int:game_id>/', views.get_related_news),
    path('related_media/<int:game_id>/', views.get_related_media),

    path('events/<int:game_id>/', views.get_events),


]
