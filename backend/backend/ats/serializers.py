from rest_framework import serializers
from .models import Resume,JobDescription, JobAnalysis
from useraccount.serializers import UserDetailSerializer

class JobDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobDescription
        fields = ['id', 'title', 'description', 'created_at']

class JobAnalysisSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobAnalysis
        fields = ['id', 'similarity_score', 'key_skills', 'missing_skills', 'created_at']

class JobDescriptionAnalysisSerializer(serializers.ModelSerializer):
    analysis = JobAnalysisSerializer(read_only=True)

    class Meta:
        model = JobDescription
        fields = ['id', 'title', 'description', 'created_at', 'analysis']

class ResumeSerializer(serializers.ModelSerializer):
    user = UserDetailSerializer(read_only=True, many=False)
    job_descriptions = JobDescriptionSerializer(many=True, read_only=True)
    
    class Meta:
        model = Resume
        fields = (
            'id',
            'user',
            'pdf',
            'impact_score',
            'impact_feedback',
            'quantify_impact_score',
            'quantify_impact_feedback',
            'repetition_score',
            'repetition_feedback',
            'weak_verbs_score',
            'weak_verbs_feedback',
            'verb_tenses_score',
            'verb_tenses_feedback',
            'responsibilities_score',
            'responsibilities_feedback',
            'spelling_and_consistency_score',
            'spelling_and_consistency_feedback',
            'brevity_score',
            'brevity_feedback',
            'length_score',
            'length_feedback',
            'use_of_bullets_score',
            'use_of_bullets_feedback',
            'bullet_lengths_score',
            'bullet_lengths_feedback',
            'filler_words_score',
            'filler_words_feedback',
            'page_density_score',
            'page_density_feedback',
            'style_score',
            'style_feedback',
            'buzzwords_score',
            'buzzwords_feedback',
            'dates_score',
            'dates_feedback',
            'contact_and_personal_details_score',
            'contact_and_personal_details_feedback',
            'readability_score',
            'readability_feedback',
            'personal_pronouns_score',
            'personal_pronouns_feedback',
            'active_voice_score',
            'active_voice_feedback',
            'consistency_score',
            'consistency_feedback',
            'sections_score',
            'sections_feedback',
            'education_score',
            'education_feedback',
            'unnecessary_sections_score',
            'unnecessary_sections_feedback',
            'skills_score',
            'skills_feedback',
            'soft_skills_score',
            'soft_skills_feedback',
            'communication_score',
            'communication_feedback',
            'leadership_score',
            'leadership_feedback',
            'analytical_score',
            'analytical_feedback',
            'teamwork_score',
            'teamwork_feedback',
            'drive_score',
            'drive_feedback',
            'overall_score',
            'overall_feedback',
            'cover_letter',
            'job_matches',
            'created_at',
            'updated_at',
            'get_pdf_url',
            'job_descriptions',
        )