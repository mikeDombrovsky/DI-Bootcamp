from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer

from .models import CustomUser

class UserProfileView(APIView):
  def get(self, request, user_id):
      user = CustomUser.objects.get(id=user_id)
      serializer = CustomUserSerializer(user)
      return Response(serializer.data)
