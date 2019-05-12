from rest_framework import viewsets
from app.models import Proposal
from app.serializer import ProposalSerializer


class ProposalView(viewsets.ModelViewSet):
    queryset = Proposal.objects.all()
    serializer_class = ProposalSerializer
    queryset = Proposal.objects.all()
