from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import Book
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
import json


@csrf_exempt
def test(request):
    return HttpResponse('<h1>Test</h1>')


@csrf_exempt
def list_books(request):
    
    if request.method == 'GET':
        data = serializers.serialize('json', Book.objects.all())
        return JsonResponse(json.loads(data), safe=False)


@csrf_exempt
def book_detail(request, id):
    if request.method == 'GET':
        try:
            book = Book.objects.get(id=id)
        except Book.DoesNotExist:
            return HttpResponse(status=404)

        return JsonResponse(book)
    return HttpResponse(status=400)

@csrf_exempt
def create_book(request):
    pass
