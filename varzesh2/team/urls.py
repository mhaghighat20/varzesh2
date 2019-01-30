from django.urls import path

from team import views

urlpatterns = [
    path('<int:team_id>/', views.get_team_by_id),
    path('name/<int:team_id>/', views.get_team_name_by_id),
    path('sorted_games/<int:team_id>/<int:sortMode>', views.get_sorted_games),
]
