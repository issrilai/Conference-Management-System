from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json

from app.models import Conference, ProgramCommittee, ProgramCommitteeMember


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
        reviewers = body['reviewers']

        conference_instance = Conference.objects.create(name=name, dateStart=dateStart, dateStop=dateStop,
                                                        abstractDeadline=abstractDeadline,
                                                        submitDeadline=submitDeadline, bidDeadline=bidDeadline,
                                                        reviewDeadline=reviewDeadline)
        conference_instance.save()

        conf_id = conference_instance.id
        for reviewer in reviewers:
            try:
                pc_member = ProgramCommitteeMember.objects.get(uid_id=int(reviewer))
            except ObjectDoesNotExist as e:
                pc_member = None

            if pc_member is not None:
                pc = ProgramCommittee.objects.create(confid_id=conf_id, pcid_id=pc_member.id)
                pc.save()

        return Response("ok", 200)
