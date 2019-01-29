from django.urls import path

from game import views

urlpatterns = [
    path('<int:game_id>/details/', views.get_game_details),
]
