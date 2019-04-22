from rest_framework import serializers
<<<<<<< HEAD
from django.contrib.auth.models import User
=======
# from django.contrib.auth.models import User
from app.models import Conference
from app.models.user import User
>>>>>>> origin/master


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

<<<<<<< HEAD
=======

class ConferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conference
        fields = ('id',
            'name', 'dateStart', 'dateStop', 'abstractDeadline', 'submitDeadline', 'bidDeadline', 'reviewDeadline')

>>>>>>> origin/master
