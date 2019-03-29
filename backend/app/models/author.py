from django.db import models

from app.models.user import User


class Author(models.Model):
    uid = models.ForeignKey(User, on_delete=models.CASCADE, blank=False)
    affiliation = models.CharField(max_length=50)
    isSpeaker = models.BooleanField(default=False)
