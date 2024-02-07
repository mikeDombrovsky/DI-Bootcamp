"""
URL configuration for studensts_app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from students.views import student_list, student_detail, api_overview

urlpatterns = [
    # question - should we remove this admin path if we use rest framework?
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('', api_overview),
    path('api/students', student_list),
    path('api/students/<int:pk>', student_detail),
]
