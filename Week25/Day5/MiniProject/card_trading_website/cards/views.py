from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Card
from .serializers import CardSerializer


class CardListView(APIView):
    def get(self, request):
        cards = Card.objects.all()
        print(cards[0])
        serializer = CardSerializer(cards, many=True)
        print(type(serializer.data))
        return Response(data=serializer.data)


class CardDetailView(APIView):
    def get(self, request, card_id):
        card = Card.objects.get(id=card_id)
        serializer = CardSerializer(card)
        return Response(serializer.data)


class BuyCardView(APIView):
    def post(self, request, card_id, user_id):
        # Fetch card and user, check balance, update ownership
        # Return a response with the transaction result
        pass


class SellCardView(APIView):
    def post(self, request, card_id, user_id):
        # Validate ownership, process transaction, update card status
        # Return a response with the transaction result
        pass


