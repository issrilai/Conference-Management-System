from django.db import models

from app.models.chair import Chair
from app.models.conference import Conference


class Section(models.Model):

    chair = models.ForeignKey(Chair, on_delete=models.CASCADE, blank=False)
    name = models.CharField(max_length=50, blank=False)
    confid = models.ForeignKey(Conference, on_delete=models.CASCADE, blank=False)
    startHour = models.TimeField(blank=False)
    endHour = models.TimeField(blank=False)
