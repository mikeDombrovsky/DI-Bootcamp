from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser

from .models import Student
from .serializers import StudentSerializer


@csrf_exempt
def student_list(request):
    if request.method == 'GET':
        queryset = Student.objects.all()
        serializer = StudentSerializer(queryset, many=True)
        return JsonResponse(data=serializer.data, safe=False)
    
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = StudentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def student_detail(request, pk):
    try:
        student = Student.objects.get(pk=pk)
    except Student.DoesNotExist:
        return HttpResponse('Student not found', status=404)
    
    if request.method == 'GET':
        serializer = StudentSerializer(student)
        return JsonResponse(data=serializer.data)
    
    if request.method == 'PUT':
        new_details = JSONParser().parse(request)
        serializer = StudentSerializer(student, new_details)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    
    if request.method == 'DELETE':
        student.delete()
        return HttpResponse(f'Student successfully deleted.', status=204)
        