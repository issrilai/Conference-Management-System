from django.contrib.auth.models import User
from rest_framework import viewsets
<<<<<<< HEAD
=======

>>>>>>> origin/master
from app.serializer import UserSerializer


class HelloView(viewsets.ModelViewSet):
    queryset = User.objects.all()
<<<<<<< HEAD
=======
    serializer_class = UserSerializer

>>>>>>> origin/master
