from django.db import models
from django.conf import settings


class ProgramCommitteeMember(models.Model):
    uid = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=False, related_name='userID')
    affiliation = models.CharField(max_length=50)
    webpage = models.CharField(max_length=50)

