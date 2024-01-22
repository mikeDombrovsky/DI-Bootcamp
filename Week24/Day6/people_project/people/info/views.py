from django.http import HttpResponse
from django.shortcuts import render
import json

name = 'Bob Smith'
age = 35
country = 'USA'

people = ['bob', 'martha', 'fabio', 'john']

all_people = [
    {
        'id': 1,
        'name': 'Bob Smith',
        'age': 35,
        'country': 'USA'
    },
    {
        'id': 2,
        'name': 'Martha Smith',
        'age': 60,
        'country': 'USA'
    },
    {
        'id': 3,
        'name': 'Fabio Alberto',
        'age': 18,
        'country': 'Italy'
    },
    {
        'id': 4,
        'name': 'Dietrich Stein',
        'age': 85,
        'country': 'Germany'
    }
]

def display_person(request):
    return HttpResponse(f'Person: name: {name}, age: {age}, country: {country}')


def display_people(request):
    arr = [p.capitalize() for p in people]
    arr = sorted(arr)
    return HttpResponse(json.dumps(arr))

def display_all_people(request):
    arr = sorted(all_people, key=lambda x: x['age'])
    
    return HttpResponse(json.dumps(arr))