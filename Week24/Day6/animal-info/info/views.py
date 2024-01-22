from django.http import HttpResponse
# import data
import json

animals = [
    {
        "id": 1,
        "name": "Dog",
        "legs": 4,
        "weight": 5.67,
        "height": 4.2,
        "speed": 34,
        "family": 2
    },
    {
        "id": 2,
        "name": "Domestic Cat",
        "legs": 2,
        "weight": 5.67,
        "height": 4.2,
        "speed": 34,
        "family": 1
    },
    {
        "id": 3,
        "name": "Panther",
        "legs": 2,
        "weight": 5.67,
        "height": 4.2,
        "speed": 34,
        "family": 1
    }
]

families = [
    {
        "id": 1,
        "name": "Felidae"
    },
    {
        "id": 2,
        "name": "Caninae"
    }
]


def display_all_animals(request):
    return HttpResponse(json.dumps(animals))


def display_all_families(request):
    return HttpResponse(json.dumps(families))


def display_one_animal(request, animal_id):
    needed_animal = None
    for animal in animals:
        if animal['id'] == animal_id:
            needed_animal = animal

    if not needed_animal:
        raise Exception('Not found')
    return HttpResponse(json.dumps(needed_animal))


def display_animals_per_family(request, family_id):
    needed_animals = []
    for animal in animals:
        if animal['family'] == family_id:
            needed_animals.append(animal)

    return HttpResponse(json.dumps(needed_animals))
