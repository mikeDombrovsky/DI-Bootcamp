from datetime import datetime
import requests
from django.core.management.base import BaseCommand

from cards.models import Card


class Command(BaseCommand):
    help = 'Fetch data from API and load cards into the database'

    def handle(self, *args, **kwargs):
        url = 'https://hp-api.onrender.com/api/characters'
        response = requests.get(url)

        if response.status_code == 200:
            characters = response.json()


            for character in characters:
                date_of_birth = character.get('dateOfBirth')
                if date_of_birth:
                    # Parse the date string and convert it to the correct format
                    date_of_birth = datetime.strptime(date_of_birth, '%d-%m-%Y').strftime('%Y-%m-%d')
                
                
                card = Card(
                    id=character['id'],
                    name_character=character['name'],
                    species=character['species'],
                    house=character['house'],
                    image_url=character['image'],
                    date_of_birth=date_of_birth,
                    patronus=character['patronus'],
                )
                card.save()

            self.stdout.write(self.style.SUCCESS(
                'Successfully loaded cards into the database'))
        else:
            self.stdout.write(self.style.ERROR(
                f'Failed to fetch data from API. Status code: {response.status_code}'))
