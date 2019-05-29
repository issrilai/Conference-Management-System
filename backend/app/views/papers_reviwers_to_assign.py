from rest_framework import viewsets

from app.models import Section
from app.serializer import ChairSectionPaperSerializer


class PapersReviwersToAssign(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = ChairSectionPaperSerializer
