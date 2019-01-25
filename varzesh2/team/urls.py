from django.urls import path

from team import views

urlpatterns = [
    path('<int:team_id>/', views.get_team_by_id),
]
