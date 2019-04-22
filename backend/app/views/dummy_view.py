from django.contrib.auth.models import User
from rest_framework import viewsets
from app.serializer import UserSerializer


class HelloView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
