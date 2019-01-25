from django.urls import path

from news import views

urlpatterns = [
    path('<int:news_id>/<int:load_description>/', views.get_news_by_id),
]
