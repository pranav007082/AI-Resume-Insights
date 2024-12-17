import uuid
from django.conf import settings
from django.db import models
from useraccount.models import User

class Resume(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user=models.ForeignKey(User,related_name='resumes',on_delete=models.CASCADE)
    pdf = models.FileField(upload_to='uploads/resumes/', blank=True, null=True)
    impact_score = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    quantitative_impact_score = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    quantitative_impact_analysis = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Resume"
        verbose_name_plural = "Resumes"
        ordering = ['-created_at']

    def __str__(self):
        return f"Resume {self.id} for User {self.user.email}"

    def get_pdf_url(self):
        """Return the full URL to the uploaded PDF if available."""
        if self.pdf:
            return f'{settings.WEBSITE_URL}{self.pdf.url}'
        return ''
