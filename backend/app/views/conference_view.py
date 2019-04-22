from rest_framework import viewsets

from app.models import Conference
from app.serializer import ConferenceSerializer


class ConferenceView(viewsets.ModelViewSet):
    queryset = Conference.objects.all()
    serializer_class = ConferenceSerializer
