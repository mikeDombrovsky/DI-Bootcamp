from django.db import models
from customusers.models import User
import random
import uuid


def random_price():
    return random.uniform(200, 2000)


def random_xp_points():
    return random.randint(1, 10)


class Card(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name_character = models.CharField(max_length=255)
    species = models.CharField(max_length=255)
    house = models.CharField(max_length=255)
    image_url = models.URLField()
    date_of_birth = models.DateField(null=True)
    patronus = models.CharField(max_length=255)
    for_sale = models.BooleanField(default=True)
    price = models.DecimalField(
        default=random_price, max_digits=10, decimal_places=2)
    xp_points = models.IntegerField(default=random_xp_points)
    current_owner = models.ForeignKey(
        User, related_name='current_owner_cards', on_delete=models.SET_NULL, null=True, blank=True, default=None)
    previous_owner = models.ForeignKey(
        User, related_name='previous_owner_cards', on_delete=models.SET_NULL, null=True, blank=True)
