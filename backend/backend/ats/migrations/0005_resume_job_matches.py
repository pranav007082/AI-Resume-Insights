# Generated by Django 5.0.2 on 2024-12-23 00:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ats', '0004_resume_cover_letter'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='job_matches',
            field=models.TextField(blank=True, null=True),
        ),
    ]
