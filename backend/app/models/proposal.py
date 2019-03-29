from django.db import models

from app.models.author import Author
from app.models.section import Section


class Proposal(models.Model):

    aid = models.ForeignKey(Author, on_delete=models.CASCADE, blank=False)
    name = models.CharField(max_length=50, blank=False)
    keyWords = models.CharField(max_length=100, blank=False)
    sid = models.ForeignKey(Section, on_delete=models.CASCADE, blank=False)
    abstract = models.FileField(upload_to='pdf', blank=False)
    pdf = models.FileField(upload_to='pdf', blank=False)
    isAccepted = models.BooleanField(default=False)
