from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json


class RegisterAuthorView():
    @api_view(['POST'])
    def registerAuthor(request):
        data = request.body
        body = json.loads(data)
        username = body['username']
        password = body['password']
        firstname = body['firstname']
        lastname = body['lastname']
        password = body['password']
        affiliation = body['affiliation']
        # todo add info for author in database
        print(username, password, firstname, lastname, password, affiliation)
        return Response("ok", 200)
