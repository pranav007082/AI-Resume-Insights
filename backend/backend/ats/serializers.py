from rest_framework import serializers
from .models import Resume
from useraccount.serializers import UserDetailSerializer

class ResumeSerializer(serializers.ModelSerializer):
    user = UserDetailSerializer(read_only=True, many=False)
    
    class Meta:
        model = Resume
        fields = (  # Change from set to tuple
            'id',
            'pdf',
            'impact_score',
            'quantitative_impact_score',
            'quantitative_impact_analysis',
            'created_at',
            'updated_at',
            'user',
            'get_pdf_url'
        )