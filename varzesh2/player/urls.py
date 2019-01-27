from django.urls import path

from player import views

urlpatterns = [
    path('<int:player_id>/', views.get_player_by_id),
    path('related_news/<int:player_id>/', views.get_related_news_by_id),
]
