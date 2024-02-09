from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Card
from customusers.models import User
from .serializers import CardSerializer
from rest_framework.permissions import AllowAny


def index(request):

    return HttpResponse('''
<h2>Hello. You're at the Cards trading website index.</h2>
<ul>
    <li>
        <a href='/cards'>Cards</a>
    </li>
    <li>
        <a href='/admin'>Admin</a>
    </li>
</ul>
<p>
    <h3>More paths: </h3>
    <p>http://127.0.0.1:8000/cards/<b>card_id</b></p>
    <p>http://127.0.0.1:8000/cards/<b>card_id</b>/buy/<b>int:user_id</b></p>
    <p>http://127.0.0.1:8000/cards/<b>card_id</b>/sell/<b>int:user_id</b></p>
</p>
''')


class CardListView(APIView):

    permission_classes = (AllowAny,)

    def get(self, request):
        cards = Card.objects.all()
        serializer = CardSerializer(cards, many=True)
        print(type(serializer.data))
        return Response(serializer.data)


class CardDetailView(APIView):
    def get(self, request, card_id):
        card = Card.objects.get(id=card_id)
        serializer = CardSerializer(card)
        return Response(serializer.data)

# user can buy card for any user by id
class BuyCardView(APIView):
    def post(self, request, card_id, user_id):
        card = Card.objects.get(id=card_id)
        user = User.objects.get(id=user_id)
        
        # Fetch card and user, check balance, update ownership
        if not card.for_sale:
            return HttpResponse('This card is not for sale', status=400)
        if request.user.amount_of_money < card.price:
            return HttpResponse('Not enough money to buy this card', status=400)
        request.user.amount_of_money = user.amount_of_money - card.price
        if card.current_owner:
            card.current_owner.amount_of_money = card.current_owner.amount_of_money + card.price
        card.previous_owner = card.current_owner
        card.current_owner = user
        user.save()
        card.save()
        serializer = CardSerializer(card)
        return Response(serializer.data, status=200)

# here actually we don't need user id if we sell card to shop back
# (if we wanna sell the card to another user we should just mark 
# in as "for_sale:true" and wait till someone will buy it)
# just owner can sell his card, so we can use request.user anyway
class SellCardView(APIView):
    def post(self, request, card_id, user_id=None):
        # Validate ownership, process transaction, update card status
        card = Card.objects.get(id=card_id)
        user = request.user
        # Fetch card and user, check balance, update ownership
        if card.current_owner != user:
            return HttpResponse('Just owner can sell this card', status=403)
        user.amount_of_money = user.amount_of_money + card.price
        
        card.previous_owner = card.current_owner
        card.current_owner = None
        user.save()
        card.save()
        serializer = CardSerializer(card)
        return Response(serializer.data, status=200)
