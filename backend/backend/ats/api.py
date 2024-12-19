from django.http import JsonResponse
from .serializers import ResumeSerializer
from useraccount.models import User
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.tokens import AccessToken
from .forms import ResumeForm
from .models import Resume
from .views import resumeReview

from django.http import JsonResponse
from rest_framework.decorators import api_view

@api_view(['POST', 'FILES'])
def upload_resume(request):
    form = ResumeForm(request.POST, request.FILES)
    if form.is_valid():
        resume = form.save(commit=False)
        resume.user = request.user
        resume.save()
        resume = Resume.objects.filter(user__email=request.user).first()
        file_path = resume.pdf.path  # Assuming resume_file is your FileField
        structured_results = resumeReview(file_path)
        print(structured_results["subagent_analysis"]["Quantify impact"]["score"])
        return JsonResponse({
            'success': True,
            'message': 'Resume uploaded successfully.'
        })
    else:
        # Collect error messages
        error_messages = {
            'field_errors': form.errors,
            'non_field_errors': form.non_field_errors()
        }
        return JsonResponse({
            'success': False,
            'errors': error_messages,
        }, status=400)


@api_view(['GET'])
def resume_analysis(request, pk):
    try:
        # Fetch the most recent resume for the user
        resume = Resume.objects.filter(user__id=pk).first()
        
        if not resume:
            return JsonResponse({
                'success': False,
                'message': 'No resumes found for this user'
            }, status=404)

        serializer = ResumeSerializer(resume)
        return JsonResponse(serializer.data)
    except Exception as e:
        import traceback
        traceback.print_exc()  # For detailed server logs
        print("bruh", e)
        return JsonResponse({
            'success': False,
            'message': str(e)
        }, status=500)

@api_view(['GET'])
def does_resume_analysis_exist(request,pk):
    resume = Resume.objects.filter(user__id=pk).first()
    if resume:
        return JsonResponse({'success':True})
    else:
        return JsonResponse({'success':False})
