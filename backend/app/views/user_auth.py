from django import forms
from django.contrib.auth import authenticate
from django.shortcuts import render, redirect
from django_filters import views
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_401_UNAUTHORIZED
from rest_framework.utils import json

@api_view(['POST'])
def auth(request):
    # username = None  # default value
    # if request.method == 'GET':
    #     if 'action' in request.GET:
    #         action = request.GET.get('action')
    #         if action == 'logout':
    #             if 'username' in request.session:
    #                 request.session.flush()
    #             return redirect('auth')
    #
    #     if 'username' in request.session:
    #         username = request.session['username']
    #         print(request.session.get_expiry_age())  # session lifetime in seconds(from now)
    #         print(request.session.get_expiry_date())  # datetime.datetime object which represents the moment in time at
    #         which the session will expire
    #
    data = request.body
    body = json.loads(data)
    username = body['username']
    password = body['password']
    user = authenticate(username=username.strip(), password=password.strip())
    if user is not None:
        request.session['username'] = username
        return Response("Valid credentials", status=HTTP_200_OK)
    else:
        request.session['error'] = 'Not valid credentials'
        return Response("Invalid credentials", status=HTTP_401_UNAUTHORIZED)
