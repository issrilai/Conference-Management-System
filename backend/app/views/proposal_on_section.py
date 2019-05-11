from rest_framework import viewsets
from app.models import Section
from app.serializer import SectionSerializer


class SectionView(viewsets.ModelViewSet):
    serializer_class = SectionSerializer
    queryset = Section.objects.all()
