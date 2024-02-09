from django.urls import path
from .views import CardListView, CardDetailView, CardListByUserView, BuyCardView, SellCardView, SetForSaleCardView

app_name = 'cards'

urlpatterns = [
    path('', CardListView.as_view(), name='card-list'),
    path('by_user/', CardListByUserView.as_view(), name='card-list-by-user'),
    path('<card_id>/', CardDetailView.as_view(), name='card-detail'),
    path('<card_id>/buy/<int:user_id>/', BuyCardView.as_view(), name='buy-card'),
    path('<card_id>/sell/<int:user_id>/',
         SellCardView.as_view(), name='sell-card'),
    path('<card_id>/for_sale/', SetForSaleCardView.as_view(), name='for-sale-card'),
]
