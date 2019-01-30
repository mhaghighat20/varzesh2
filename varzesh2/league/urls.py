from django.urls import path
from league import views

urlpatterns = [
    path('<int:league_id>/', views.get_league_by_id),
    path('/week/<int:league_id>/<int:week>', views.get_games_by_week),
    path('/get_all_leagues/', views.get_all_leagues),

]