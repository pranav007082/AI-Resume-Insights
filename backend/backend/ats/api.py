from django.http import JsonResponse
from useraccount.models import User
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.tokens import AccessToken
from .forms import ResumeForm


@api_view(['POST','FILES'])
def upload_resume(request):
    form=ResumeForm(request.POST,request.FILES)
    if form.is_valid:
        resume=form.save(commit=False)
        resume.user=request.user
        resume.save()
        return JsonResponse({
            'success':True,
        })
    else:
        print(form.errors,form.non_field_errors)
        return JsonResponse({
            "success":False,
        },status=400)

