from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator, MinLengthValidator


class Book(models.Model):
    title = models.CharField(blank=False, max_length=200)
    author = models.CharField(blank=False)
    published_date = models.DateField(blank=False)
    description = models.TextField(blank=False)
    page_count = models.PositiveIntegerField(validators=[MinValueValidator(1)])
    categories = models.CharField()
    thumbnail_url = models.URLField()


class BookReview(models.Model):
    associated_book = models.ForeignKey(
        Book, blank=False, on_delete=models.CASCADE)
    user = models.ForeignKey(User, blank=False, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)])
    review_text = models.TextField(
        blank=False, validators=[MinLengthValidator(4)])
