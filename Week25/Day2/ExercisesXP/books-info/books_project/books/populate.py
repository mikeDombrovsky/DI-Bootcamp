import requests
from .models import Book
from datetime import datetime
import django
import os
import json
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'books_project.settings')
django.setup()


def setup():
    # make the request
    res = requests.get('https://www.googleapis.com/books/v1/volumes?q={django}')

    books_json = res.json()
    print()
    # books_dict = json.dumps(books_json)

    # create and save the Book objects to the Databse
