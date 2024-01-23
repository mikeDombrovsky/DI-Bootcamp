from django.http import HttpResponse
from django.shortcuts import render

def test(request):
    return HttpResponse('<h1>Test</h1>')
