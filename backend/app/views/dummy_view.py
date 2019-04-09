from rest_framework import viewsets

# Create your views here.
from app.models import User
from app.serializer import UserSerializer
from django.contrib.auth.models import User


class HelloView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

