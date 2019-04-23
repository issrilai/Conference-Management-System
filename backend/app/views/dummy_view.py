from django.contrib.auth.models import User
from rest_framework import viewsets
from app.serializer import UserSerializer


class HelloView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

