from rest_framework import serializers
# from django.contrib.auth.models import User
from app.models.user import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

    def __int__(self, uid, username):
        self._uid = uid
        self._username = username