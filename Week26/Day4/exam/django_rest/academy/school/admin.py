from django.contrib import admin

from .models import Teacher, Course

admin.site.register(Teacher, Course)