from rest_framework import viewsets
from app.models import Section, Proposal
from app.serializer import SectionSeriaizer


class SectionView(viewsets.ModelViewSet):
    serializer_class = SectionSerializer
    queryset = Section.objects.all()
