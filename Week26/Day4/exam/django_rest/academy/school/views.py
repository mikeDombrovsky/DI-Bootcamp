from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser

from .serializers import CourseSerializer
from .models import Course, Teacher


@csrf_exempt
def course_details(request, id):
    if request.method == 'GET':
        try:
            course = Course.objects.get(pl=id)
            serializer = CourseSerializer(course)
            return JsonResponse(data=serializer.data)
        except Course.DoesNotExist:
            return HttpResponse(status=404)

    