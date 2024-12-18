from django.urls import path
from . import api

urlpatterns = [
    path('upload-resume/',api.upload_resume,name='upload_resume'),
]
