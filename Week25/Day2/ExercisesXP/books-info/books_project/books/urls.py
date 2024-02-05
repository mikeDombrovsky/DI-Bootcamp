from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.test, name='test'),
    path('all/', views.list_books, name='books'),
    path('detail/', views.book_detail, name='details')
]
