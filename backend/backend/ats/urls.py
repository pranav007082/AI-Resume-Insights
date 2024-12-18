from django.urls import path
from . import api

urlpatterns = [
    path('upload-resume/',api.upload_resume,name='upload_resume'),
    path('<uuid:pk>/',api.resume_analysis,name='resume_analysis'),
    path('<uuid:pk>/is-exist/',api.does_resume_analysis_exist,name='does_resume_analysis_exist'),
]
