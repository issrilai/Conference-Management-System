from rest_framework import viewsets
from app.models import Section
from app.serializer import SectionSeriaizer


class SectionByConferenceView(viewsets.ModelViewSet):
    serializer_class = SectionSeriaizer

    def get_queryset(self):
        if len(self.request.query_params) == 1:
            arg = self.request.query_params.get('confid', None)
            return Section.objects.all().filter(confid=arg)
