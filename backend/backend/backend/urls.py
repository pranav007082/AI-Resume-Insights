from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/ats/',include('ats.urls')),
    path('api/auth/',include('useraccount.urls'))
]
