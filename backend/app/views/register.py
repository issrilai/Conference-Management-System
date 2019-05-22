from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json

from app.models import Author, Listener, ProgramCommitteeMember, Reviewer, Chair


class Register:
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
        try:
            user_instance = User.objects.create_user(username=username, password=password, first_name=firstname,
                                                     last_name=lastname, email=email)
            user_instance.save()
            print(user_instance.id)
            author_instance = Author.objects.create(uid_id=user_instance.id, affiliation=affiliation, isSpeaker=False)
            author_instance.save()
            return Response("ok", 200)
        except:
            return Response("register error", 400)

    @api_view(['POST'])
    def registerListener(request):
        data = request.body
        body = json.loads(data)
        username = body['username']
        password = body['password']
        firstname = body['firstname']
        lastname = body['lastname']
        email = body['email']
        print(username, password, firstname, lastname, password)
        try:
            user_instance = User.objects.create_user(username=username, password=password, first_name=firstname,
                                                     last_name=lastname, email=email)
            user_instance.save()
            print(user_instance.id)
            listener_instance = Listener.objects.create(uid_id=user_instance.id)
            listener_instance.save()
            return Response("ok", 200)
        except:
            return Response("register error", 400)

    @api_view(['POST'])
    def registerPCMember(request):
        data = request.body
        body = json.loads(data)
        username = body['username']
        password = body['password']
        firstname = body['firstname']
        lastname = body['lastname']
        email = body['email']
        affiliation = body['affiliation']
        website = body['website']
        print(username, password, firstname, lastname, password)
        try:
            user_instance = User.objects.create_user(username=username, password=password, first_name=firstname,
                                                     last_name=lastname, email=email)
            user_instance.save()
            print(user_instance.id)
            pcmember_instance = ProgramCommitteeMember.objects.create(uid_id=user_instance.id, affiliation=affiliation,
                                                                      webpage=website)
            pcmember_instance.save()
            return Response("ok", 200)
        except:
            return Response("register error", 400)

    @api_view(['POST'])
    def registerReviewer(request):
        data = request.body
        body = json.loads(data)
        username = body['username']
        password = body['password']
        firstname = body['firstname']
        lastname = body['lastname']
        email = body['email']
        affiliation = body['affiliation']
        website = body['website']
        print(username, password, firstname, lastname, password)
        try:
            user_instance = User.objects.create_user(username=username, password=password, first_name=firstname,
                                                     last_name=lastname, email=email)
            user_instance.save()
            print(user_instance.id)
            pcmember_instance = ProgramCommitteeMember.objects.create(uid_id=user_instance.id, affiliation=affiliation,
                                                                      webpage=website)
            pcmember_instance.save()
            reviewer_instance = Reviewer.objects.create(pcid_id=pcmember_instance.id)
            reviewer_instance.save()
            return Response("ok", 200)
        except:
            return Response("register reviewer error", 400)

    @api_view(['POST'])
    def registerChair(request):
        data = request.body
        body = json.loads(data)
        username = body['username']
        password = body['password']
        firstname = body['firstname']
        lastname = body['lastname']
        email = body['email']
        affiliation = body['affiliation']
        website = body['website']
        print(username, password, firstname, lastname, password)
        try:
            user_instance = User.objects.create_user(username=username, password=password, first_name=firstname,
                                                     last_name=lastname, email=email)
            user_instance.save()
            print(user_instance.id)
            pcmember_instance = ProgramCommitteeMember.objects.create(uid_id=user_instance.id, affiliation=affiliation,
                                                                      webpage=website)
            pcmember_instance.save()
            chair_instance = Chair.objects.create(pcid_id=pcmember_instance.id)
            chair_instance.save()
            return Response("ok", 200)
        except:
            return Response("register reviewer error", 400)