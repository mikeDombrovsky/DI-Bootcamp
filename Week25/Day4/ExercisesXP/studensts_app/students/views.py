
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response

from dateutil.parser import parse


from .models import Student
from .serializers import StudentSerializer


@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'List': '/api/students',
        'Create': '/api/students',
        'Ditail View': '/api/students/<int:pk>',
        'Update': '/api/students/<int:pk>',
        'Delete': '/api/students/<int:pk>',
    }
    # rest_framework Response works just with @api_view
    return Response(api_urls)


@csrf_exempt
def student_list(request):
    if request.method == 'GET':
        date_joined_param = request.GET.get('date_joined')
        queryset = Student.objects.all()

        if date_joined_param:
            date = parse(date_joined_param)
            queryset = Student.objects.filter(
                date_joined__year=date.year
            ).filter(date_joined__month=date.month
                     ).filter(date_joined__day=date.day)

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
