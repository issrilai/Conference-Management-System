from django.db import models


class Conference(models.Model):
    name = models.CharField(max_length=50, blank=False)
    dateStart = models.DateField(blank=False)
    dateStop = models.DateField(blank=False)
    abstractDeadline = models.DateField(blank=False)
    submitDeadline = models.DateField(blank=False)
    bidDeadline = models.DateField(blank=False)
    reviewDeadline = models.DateField(blank=False)
