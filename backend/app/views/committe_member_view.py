from django.contrib.auth.models import User
from rest_framework import viewsets

from app.models import ProgramCommitteeMember
from app.serializer import   ProgramCommitteeAndInfoSerializer


class CommitteeMembersView(viewsets.ModelViewSet):
    queryset = ProgramCommitteeMember.objects.all()
    serializer_class = ProgramCommitteeAndInfoSerializer
