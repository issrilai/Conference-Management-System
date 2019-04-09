from django.db import models
from django.conf import settings


class Author(models.Model):
    uid = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=False)
    affiliation = models.CharField(max_length=50)
    isSpeaker = models.BooleanField(default=False)
