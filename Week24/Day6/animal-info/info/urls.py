from django.urls import path
from . import views

urlpatterns = [
    path('animals/', views.display_all_animals, name='animals'),
    path('families/', views.display_all_families, name='families'),
    path('animal/<int:animal_id>/', views.display_one_animal, name='animal'),
    path('animals_per_family/<int:family_id>/', views.display_animals_per_family, name='family_animals'),
]
