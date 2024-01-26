from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import Book
from django.views.decorators.csrf import csrf_exempt

def test(request):
    return HttpResponse('<h1>Test</h1>')


def list_books(request):
    return JsonResponse(Book.objects.all())


def book_detail(request, id):
    return JsonResponse(Book.objects.get(id=id))

@csrf_exempt
def create_book(request):
    pass