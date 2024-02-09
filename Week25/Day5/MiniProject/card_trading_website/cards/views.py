from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Card
from customusers.models import User
from .serializers import CardSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated


def index(request):

    return HttpResponse('''
<h2>Hello. You're on Cards trading api website.</h2>
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
    <p><a href="http://127.0.0.1:8000/cards/by_user">http://127.0.0.1:8000/cards/by_user</a></p>
    <p>http://127.0.0.1:8000/cards/<b>card_id</b>/sell/<b>int:user_id</b></p>
    <p>http://127.0.0.1:8000/cards/<b>card_id</b>/for_sale/<b>?price=100.00</b></p>
</p>
''')


class CardListView(APIView):

    permission_classes = (AllowAny,)

    def get(self, request):
        cards = Card.objects.all()
        serializer = CardSerializer(cards, many=True)
        return Response(serializer.data)


class CardListByUserView(APIView):

    permission_classes = (AllowAny,)

    def get(self, request):
        # request.user.id
        cards = Card.objects.filter(current_owner=request.user)
        serializer = CardSerializer(cards, many=True)
        return Response(serializer.data)


class CardDetailView(APIView):
    def get(self, request, card_id):
        card = Card.objects.get(id=card_id)
        serializer = CardSerializer(card)
        return Response(serializer.data)

# user can buy card for any user by id


class BuyCardView(APIView):

    permission_classes = (IsAuthenticated,)

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

    permission_classes = (IsAuthenticated,)

    def post(self, request, card_id, user_id=None):
        # Validate ownership, process transaction, update card status
        card = Card.objects.get(id=card_id)
        user = request.user
        # Fetch card and user, check balance, update ownership
        if card.current_owner != user:
            return HttpResponse('Just owner can sell this card', status=403)

        user.amount_of_money = user.amount_of_money + 100
        card.previous_owner = card.current_owner
        card.current_owner = None

        user.save()
        card.save()
        serializer = CardSerializer(card)
        return Response(serializer.data, status=200)


class SetForSaleCardView(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, request, card_id):
        price_param = request.GET.get('price')
        for_sale_param = request.GET.get('for_sale')
        card = Card.objects.get(id=card_id)
        user = request.user
        if card.current_owner != user:
            print(card.current_owner, user)
            return HttpResponse('Just owner can set this card for sale', status=403)

        if price_param:
            try:
                price_param = round(float(price_param), 2)
                card.price = price_param
            except Exception as e:
                return HttpResponse('Wrong price query param!', status=400)
            
        if for_sale_param.lower() == 'true':
            card.for_sale = True
        elif for_sale_param.lower() == 'false':
            card.for_sale = False

        card.save()
        serializer = CardSerializer(card)
        return Response(serializer.data, status=200)
