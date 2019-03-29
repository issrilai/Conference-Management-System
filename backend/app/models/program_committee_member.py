from django.db import models

from app.models.user import User


class ProgramCommitteeMember(models.Model):

    uid = models.ForeignKey(User, on_delete=models.CASCADE, blank=False)
    affiliation = models.CharField(max_length=50)
    webpage = models.CharField(max_length=50)
