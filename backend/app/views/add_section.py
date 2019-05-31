from django.contrib.sessions.models import Session
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import BasePermission
from rest_framework.response import Response
from rest_framework.utils import json
from django.core.exceptions import ObjectDoesNotExist
from app.models import Chair, Section, ProgramCommitteeMember


class AddSection:
    @api_view(['POST'])
    def add_sections(request):
        data = request.body
        body = json.loads(data)
        name = body['name']
        startHour = body['startHour']
        endHour = body['endHour']
        confId = body['confId']
        session_key = body['session_key']

        try:
            session = Session.objects.get(session_key=session_key)
        except ObjectDoesNotExist as e:
            return Response("invalid session key", 400)

        try:
            uid = session.get_decoded().get('uid')
            pcmember = ProgramCommitteeMember.objects.get(uid_id=uid);
        except ObjectDoesNotExist as e:
            return Response("could not find pc member", 400)

        if pcmember is not None:
            try:
                pcid = pcmember.id;
                chair = Chair.objects.get(pcid_id=pcid)
            except ObjectDoesNotExist as e:
                return Response("could not find chair", 400)

        if chair is not None:
            section = Section.objects.create(name=name, startHour=startHour, endHour=endHour,
                                               chair_id=chair.id, confid_id=confId)
            return Response("ok", 200)
        else:
            return Response("couldn't add section", 400)
