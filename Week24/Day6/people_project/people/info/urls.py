from django.urls import path
from info import views

urlpatterns = [
    path('person/', views.display_person, name='person'),
    path('people/', views.display_people, name='people'),
    path('all_people/', views.display_all_people, name='all_people'),
]