from django.conf import settings
from django.db import models


class Listener(models.Model):

    uid = models.ForeignKey(settings.AUTH_USER_MODEL,
                            on_delete=models.CASCADE,
                            blank=False)
