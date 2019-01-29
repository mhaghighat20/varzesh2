from django.urls import path

from player import views

urlpatterns = [
    path('details/<int:player_id>/', views.get_player_by_id),
    path('related_news/<int:player_id>/', views.get_related_news_ids_by_id),
    path('statistics/<int:player_id>/', views.get_player_statistics_by_id),
    path('name/<int:player_id>/', views.get_player_name_by_id)
]
