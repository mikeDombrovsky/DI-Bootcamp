from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer

from .models import User

class UserProfileView(APIView):
  def get(self, request, user_id):
      user = User.objects.get(id=user_id)
      serializer = UserSerializer(user)
      return Response(serializer.data)
