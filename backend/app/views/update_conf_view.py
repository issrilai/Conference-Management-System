from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
from app.models import Conference


class UpdateConferenceView:
    @api_view(['POST'])
    def updateConference(request):
        data = request.body
        body = json.loads(data)
        confID = body['confID']
        name = body['name']
        dateStart = body['dateStart']
        dateStop = body['dateStop']
        abstractDeadline = body['abstractDeadline']
        submitDeadline = body['submitDeadline']
        bidDeadline = body['bidDeadline']
        reviewDeadline = body['reviewDeadline']
        print(confID, name, dateStart, dateStop, abstractDeadline, submitDeadline, bidDeadline, reviewDeadline)
        Conference.objects.filter(id=confID).update(dateStart=dateStart, dateStop=dateStop,
                                                    abstractDeadline=abstractDeadline,
                                                    submitDeadline=submitDeadline, bidDeadline=bidDeadline,
                                                    reviewDeadline=reviewDeadline)
        return Response("ok", 200)
