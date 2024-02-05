import requests
from books.models import Book
from datetime import datetime
import django
import os
import json
from django.core.management.base import BaseCommand

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'books_project.settings')
django.setup()


class Command(BaseCommand):
    help = 'Fetch data from API and load books into the database'

    def handle(self, *args, **kwargs):

        # make the request
        res = requests.get(
            'https://www.googleapis.com/books/v1/volumes?q={django}')

        if res.status_code != 200:
            self.stdout.write(self.style.ERROR(
                f'Failed to fetch data from API. Status code: {res.status_code}'))
            return

        books = res.json()['items']
        print(type(books))

        for book in books:
    
            # Parse the date string and convert it to the correct format
            date = book['volumeInfo']['publishedDate']
            print(date)
            published_date = datetime.strptime(date, '%Y-%m-%d')

            # create book and save to db
            new_book = Book(
                title=book['volumeInfo']['title'],
                author=', '.join(book['volumeInfo']['authors']),
                description=book['volumeInfo']['description'],
                published_date=published_date,
                page_count=book['volumeInfo']['pageCount'],
                categories=', '.join(book['volumeInfo']['categories']),
                thumbnail_url=book['volumeInfo']['imageLinks']['thumbnail']
            )
            new_book.save()

        self.stdout.write(self.style.SUCCESS(
            'Successfully loaded cards into the database'))
