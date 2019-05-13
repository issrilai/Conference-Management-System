from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json

from app.models import Conference


class AddConfereceView:
    @api_view(['POST'])
    def addConference(request):
        data = request.body
        body = json.loads(data)
        name = body['name']
        dateStart = body['startDate']
        dateStop = body['endDate']
        abstractDeadline = body['abstractDeadline']
        submitDeadline = body['submitDeadline']
        bidDeadline = body['bidDeadline']
        reviewDeadline = body['reviewDeadline']
        conference_instance = Conference.objects.create(name=name, dateStart=dateStart, dateStop=dateStop,
                                                        abstractDeadline=abstractDeadline,
                                                        submitDeadline=submitDeadline, bidDeadline=bidDeadline,
                                                        reviewDeadline=reviewDeadline)
        conference_instance.save()
        return Response("ok", 200)
