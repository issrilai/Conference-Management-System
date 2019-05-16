from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json

from app.models import Author


class RegisterAuthorView:
    @api_view(['POST'])
    def registerAuthor(request):
        data = request.body
        body = json.loads(data)
        username = body['username']
        password = body['password']
        firstname = body['firstname']
        lastname = body['lastname']
        email = body['email']
        affiliation = body['affiliation']
        print(username, password, firstname, lastname, password, affiliation)
        user_instance = User.objects.create(username=username, password=password, first_name=firstname, last_name=lastname, email=email)
        user_instance.save()
        print(user_instance.id)
        author_instance = Author.objects.create(uid_id=user_instance.id, affiliation=affiliation, isSpeaker=False)
        author_instance.save()
        return Response("ok", 200)
