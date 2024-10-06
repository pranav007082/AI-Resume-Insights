from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('resume-review/',views.resumeReview,name='resume-review'),
]
