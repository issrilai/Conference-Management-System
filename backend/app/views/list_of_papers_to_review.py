from django.contrib.sessions.models import Session
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.response import Response
from rest_framework import viewsets

from app.models import Result, ProgramCommitteeMember, Reviewer
from app.serializer import PapersForReviewerSerializer


class PapersForReviewerView(viewsets.ModelViewSet):
    rid = None

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
            rid = Reviewer.objects.get(pcid_id=pcmember.id)
        except ObjectDoesNotExist as e:
            return Response("could not find reviewer", 400)
        if rid is not None:
            return Result.objects.filter(rid=rid).all()
    serializer_class = PapersForReviewerSerializer
