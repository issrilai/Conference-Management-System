from django.contrib.sessions.models import Session
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import viewsets
from rest_framework.response import Response

from app.models import Section, Chair, ProgramCommitteeMember
from app.serializer import ChairSectionPaperSerializer


class PapersReviwersToAssign(viewsets.ModelViewSet):
    def get_queryset(self):
        session_key = self.kwargs['session']
        print(session_key)
        try:
            session = Session.objects.get(session_key=session_key)
        except ObjectDoesNotExist as e:
            return Response("invalid session key", 400)
        try:
            uid = session.get_decoded().get('uid')
            pcmember = ProgramCommitteeMember.objects.get(uid_id=uid)
            chair = Chair.objects.get(pcid_id=pcmember.id)
        except ObjectDoesNotExist as e:
            return Response("could not find chair", 400)
        if chair is not None:
            return Section.objects.filter(chair_id=chair.id)
    serializer_class = ChairSectionPaperSerializer
