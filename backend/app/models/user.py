from django.db import models


class User(models.Model):
    username = models.CharField(max_length=50, blank=False)
    password = models.CharField(max_length=50, blank=False)
    firstName = models.CharField(max_length=50, blank=False)
    lastName = models.CharField(max_length=50, blank=False)
    email = models.CharField(max_length=50, blank=False)
