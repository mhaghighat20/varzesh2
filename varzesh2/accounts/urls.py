from django.urls import path
from accounts import views

urlpatterns = [
    path('login/', views.login_view),
    path('signup/', views.signup),
    path('is_logged_in/<str:login_token>/', views.is_logged_in),
    path('logout/<str:login_token>/', views.logout)
]
