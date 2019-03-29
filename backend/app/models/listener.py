from django.db import models

from app.models.user import User


class Listener(models.Model):

    uid = models.ForeignKey(User, on_delete=models.CASCADE, blank=False)
