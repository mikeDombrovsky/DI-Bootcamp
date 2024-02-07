from django.urls import path
from .views import CardListView, CardDetailView, BuyCardView, SellCardView

app_name = 'cards'

urlpatterns = [
    path('', CardListView.as_view(), name='card-list'),
    path('<int:card_id>/', CardDetailView.as_view(), name='card-detail'),
    path('<int:card_id>/buy/<int:user_id>/', BuyCardView.as_view(), name='buy-card'),
    path('<int:card_id>/sell/<int:user_id>/', SellCardView.as_view(), name='sell-card'),
]