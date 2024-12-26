import sys
import time
from django.http import JsonResponse
from .serializers import ResumeSerializer,JobDescriptionAnalysisSerializer
from useraccount.models import User
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.tokens import AccessToken
from .forms import ResumeForm
from .models import Resume, JobDescription, JobAnalysis
from .views import generate_cover_letter, generate_job_matches, resumeReview,job_analyzer
from rest_framework import status

import traceback
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .models import JobDescription, Resume, JobAnalysis
from .serializers import JobDescriptionSerializer, JobAnalysisSerializer, JobDescriptionAnalysisSerializer
from .views import job_analyzer

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
        file_path = resume.pdf.path  
        structured_results = resumeReview(file_path)

        # Helper function to safely extract values with default
        def safe_get(dict_obj, key_path, default=0):
            keys = key_path.split(".")
            try:
                for key in keys:
                    dict_obj = dict_obj[key]
                return dict_obj
            except (KeyError, TypeError):
                return default
        print(safe_get(structured_results, "agent_summaries.Impact.score", 0))
        # Fill resume fields safely
        resume.impact_score = safe_get(structured_results, "agent_summaries.Impact.score", 0)
        resume.impact_feedback = safe_get(structured_results, "agent_summaries.Impact.feedback", "Error filling this field")

        resume.brevity_score = safe_get(structured_results, "agent_summaries.Brevity.score", 0)
        resume.brevity_feedback = safe_get(structured_results, "agent_summaries.Brevity.feedback", "Error filling this field")

        resume.style_score = safe_get(structured_results, "agent_summaries.Style.score", 0)
        resume.style_feedback = safe_get(structured_results, "agent_summaries.Style.feedback", "Error filling this field")

        resume.sections_score = safe_get(structured_results, "agent_summaries.Sections.score", 0)
        resume.sections_feedback = safe_get(structured_results, "agent_summaries.Sections.feedback", "Error filling this field")

        resume.quantify_impact_score = safe_get(structured_results, "subagent_analysis.Quantify impact.score", 0)
        resume.quantify_impact_feedback = safe_get(structured_results, "subagent_analysis.Quantify impact.feedback", "Error filling this field")

        resume.repetition_score = safe_get(structured_results, "subagent_analysis.Repetition.score", 0)
        resume.repetition_feedback = safe_get(structured_results, "subagent_analysis.Repetition.feedback", "Error filling this field")

        resume.weak_verbs_score = safe_get(structured_results, "subagent_analysis.Weak verbs.score", 0)
        resume.weak_verbs_feedback = safe_get(structured_results, "subagent_analysis.Weak verbs.feedback", "Error filling this field")

        resume.verb_tenses_score = safe_get(structured_results, "subagent_analysis.Verb tenses.score", 0)
        resume.verb_tenses_feedback = safe_get(structured_results, "subagent_analysis.Verb tenses.feedback", "Error filling this field")

        resume.responsibilities_score = safe_get(structured_results, "subagent_analysis.Responsibilities.score", 0)
        resume.responsibilities_feedback = safe_get(structured_results, "subagent_analysis.Responsibilities.feedback", "Error filling this field")

        resume.spelling_and_consistency_score = safe_get(structured_results, "subagent_analysis.Spelling & consistency.score", 0)
        resume.spelling_and_consistency_feedback = safe_get(structured_results, "subagent_analysis.Spelling & consistency.feedback", "Error filling this field")

        resume.length_score = safe_get(structured_results, "subagent_analysis.Length.score", 0)
        resume.length_feedback = safe_get(structured_results, "subagent_analysis.Length.feedback", "Error filling this field")

        resume.use_of_bullets_score = safe_get(structured_results, "subagent_analysis.Use of bullets.score", 0)
        resume.use_of_bullets_feedback = safe_get(structured_results, "subagent_analysis.Use of bullets.feedback", "Error filling this field")

        resume.bullet_lengths_score = safe_get(structured_results, "subagent_analysis.Bullet Lengths.score", 0)
        resume.bullet_lengths_feedback = safe_get(structured_results, "subagent_analysis.Bullet Lengths.feedback", "Error filling this field")

        resume.filler_words_score = safe_get(structured_results, "subagent_analysis.Filler Words.score", 0)
        resume.filler_words_feedback = safe_get(structured_results, "subagent_analysis.Filler Words.feedback", "Error filling this field")

        resume.page_density_score = safe_get(structured_results, "subagent_analysis.Page Density.score", 0)
        resume.page_density_feedback = safe_get(structured_results, "subagent_analysis.Page Density.feedback", "Error filling this field")

        resume.buzzwords_score = safe_get(structured_results, "subagent_analysis.Buzzwords.score", 0)
        resume.buzzwords_feedback = safe_get(structured_results, "subagent_analysis.Buzzwords.feedback", "Error filling this field")

        resume.dates_score = safe_get(structured_results, "subagent_analysis.Dates.score", 0)
        resume.dates_feedback = safe_get(structured_results, "subagent_analysis.Dates.feedback", "Error filling this field")

        resume.contact_and_personal_details_score = safe_get(structured_results, "subagent_analysis.Contact and Personal Details.score", 0)
        resume.contact_and_personal_details_feedback = safe_get(structured_results, "subagent_analysis.Contact and Personal Details.feedback", "Error filling this field")

        resume.readability_score = safe_get(structured_results, "subagent_analysis.Readability.score", 0)
        resume.readability_feedback = safe_get(structured_results, "subagent_analysis.Readability.feedback", "Error filling this field")

        resume.personal_pronouns_score = safe_get(structured_results, "subagent_analysis.Personal Pronouns.score", 0)
        resume.personal_pronouns_feedback = safe_get(structured_results, "subagent_analysis.Personal Pronouns.feedback", "Error filling this field")

        resume.active_voice_score = safe_get(structured_results, "subagent_analysis.Active Voice.score", 0)
        resume.active_voice_feedback = safe_get(structured_results, "subagent_analysis.Active Voice.feedback", "Error filling this field")

        resume.consistency_score = safe_get(structured_results, "subagent_analysis.Consistency.score", 0)
        resume.consistency_feedback = safe_get(structured_results, "subagent_analysis.Consistency.feedback", "Error filling this field")

        resume.education_score = safe_get(structured_results, "subagent_analysis.Education.score", 0)
        resume.education_feedback = safe_get(structured_results, "subagent_analysis.Education.feedback", "Error filling this field")

        resume.unnecessary_sections_score = safe_get(structured_results, "subagent_analysis.Unnecessary Sections.score", 0)
        resume.unnecessary_sections_feedback = safe_get(structured_results, "subagent_analysis.Unnecessary Sections.feedback", "Error filling this field")

        resume.skills_score = safe_get(structured_results, "subagent_analysis.Skills.score", 0)
        resume.skills_feedback = safe_get(structured_results, "subagent_analysis.Skills.feedback", "Error filling this field")

        resume.soft_skills_score = safe_get(structured_results, "agent_summaries.SoftSkills.score", 0)
        resume.soft_skills_feedback = safe_get(structured_results, "agent_summaries.SoftSkills.feedback", "Error filling this field")

        resume.communication_score = safe_get(structured_results, "subagent_analysis.Communication.score", 0)
        resume.communication_feedback = safe_get(structured_results, "subagent_analysis.Communication.feedback", "Error filling this field")

        resume.leadership_score = safe_get(structured_results, "subagent_analysis.Leadership.score", 0)
        resume.leadership_feedback = safe_get(structured_results, "subagent_analysis.Leadership.feedback", "Error filling this field")

        resume.analytical_score = safe_get(structured_results, "subagent_analysis.Analytical.score", 0)
        resume.analytical_feedback = safe_get(structured_results, "subagent_analysis.Analytical.feedback", "Error filling this field")

        resume.teamwork_score = safe_get(structured_results, "subagent_analysis.Teamwork.score", 0)
        resume.teamwork_feedback = safe_get(structured_results, "subagent_analysis.Teamwork.feedback", "Error filling this field")

        resume.drive_score = safe_get(structured_results, "subagent_analysis.Drive.score", 0)
        resume.drive_feedback = safe_get(structured_results, "subagent_analysis.Drive.feedback", "Error filling this field")

        resume.overall_score= safe_get(structured_results, "final_verdict.score", 0)
        resume.overall_feedback = safe_get(structured_results, "final_verdict.feedback", "Error filling this field")

        resume.save()
                       

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


@api_view(['GET'])
def cover_letter_gen(request):
    try:
        # Fetch the most recent resume for the user
        resume = Resume.objects.filter(user__email=request.user).first()

        if not resume:
            return JsonResponse({
                'success': False,
                'message': 'No resumes found for this user'
            }, status=404)

        # Generate and save the cover letter
        cover_letter = generate_cover_letter(resume.pdf.path)
        resume.cover_letter = cover_letter
        resume.save()

        return JsonResponse({
            'success': True,
            'message': 'Cover letter generated successfully',
            'cover_letter': cover_letter
        }, status=200)
    
    except Exception as e:
        import traceback
        traceback.print_exc()  # Log traceback details
        return JsonResponse({
            'success': False,
            'message': f'Error: {str(e)}'
        }, status=500)
    
@api_view(['GET'])
def job_matches_gen(request):
    try:
        # Fetch the most recent resume for the user
        resume = Resume.objects.filter(user__email=request.user).first()

        if not resume:
            return JsonResponse({
                'success': False,
                'message': 'No resumes found for this user'
            }, status=404)

        # Generate and save the cover letter
        job_matches = generate_job_matches(resume.pdf.path)
        resume.job_matches = job_matches
        resume.save()

        return JsonResponse({
            'success': True,
            'message': 'Job matches generated successfully',
            'job_matches': job_matches
        }, status=200)
    
    except Exception as e:
        import traceback
        traceback.print_exc()  # Log traceback details
        return JsonResponse({
            'success': False,
            'message': f'Error: {str(e)}'
        }, status=500)

User = get_user_model()

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def submit_job_description(request):
    try:
        # Get the user from the request
        user = request.user

        # Validate incoming data with serializer
        serializer = JobDescriptionSerializer(data=request.data)
        if serializer.is_valid():
            # Save the job description with the user
            job_description = serializer.save(user=user)

            # Analyze the job description
            analysis_result = job_analyzer(job_description.id)
            
            # Handle errors from the analysis tool
            if "error" in analysis_result:
                return Response(
                    {'success': False, 'message': analysis_result["error"]},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

            # Find the user's resume
            resume = Resume.objects.filter(user=user).first()
            if not resume:
                return Response(
                    {'success': False, 'message': 'No resume found for this user'},
                    status=status.HTTP_404_NOT_FOUND
                )

            # Create and save the job analysis record
            job_analysis = JobAnalysis.objects.create(
                job_description=job_description,
                resume=resume,
                similarity_score=analysis_result['similarity_score'],
                key_skills=analysis_result['key_skills'],
                missing_skills=analysis_result['missing_skills']
            )

            # Serialize the response
            analysis_serializer = JobAnalysisSerializer(job_analysis)
            job_description_serializer = JobDescriptionAnalysisSerializer(job_description)
            return Response(
                {
                    'success': True,
                    'message': 'Job description analyzed successfully',
                    'data': {
                        'job_description': job_description_serializer.data,
                        'job_analysis': analysis_serializer.data,
                    },
                },
                status=status.HTTP_201_CREATED
            )

        # If serializer is invalid, return validation errors
        return Response(
            {'success': False, 'message': 'Invalid data', 'errors': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        import traceback
        traceback.print_exc()
        return Response(
            {'success': False, 'message': f'Error: {str(e)}'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_job_analyses(request):
    try:
        # Fetch all job descriptions for the user
        job_descriptions = JobDescription.objects.filter(user=request.user).order_by('-created_at')

        if not job_descriptions:
            return Response({
                'success': False,
                'message': 'No job analyses found for this user'
            }, status=404)

        # Serialize and return the results
        serializer = JobDescriptionAnalysisSerializer(job_descriptions, many=True)
        return Response({
            'success': True,
            'message': 'Job analyses retrieved successfully',
            'data': serializer.data
        }, status=200)

    except Exception as e:
        traceback.print_exc()
        return Response({
            'success': False,
            'message': f'Error: {str(e)}'
        }, status=500)