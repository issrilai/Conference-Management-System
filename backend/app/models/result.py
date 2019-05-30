from django.db import models

from app.models.proposal import Proposal
from app.models.reviewer import Reviewer


class Result(models.Model):

    rid = models.ForeignKey(Reviewer, on_delete=models.CASCADE, blank=False)
    prid = models.ForeignKey(Proposal, on_delete=models.CASCADE, blank=False, related_name='paper')
    qualifier = models.CharField(max_length=15, choices=[("strong accept", "strong accept"), ("accept", "accept"),
                                                         ("weak accept", "weak accept"), ("borderline paper",
                                                                                          "borderline paper"),
                                                         ("weak reject", "weak reject"), ("reject", "reject"),
                                                         ("strong reject", "strong reject")], default=False)
    suggestions = models.TextField(max_length=None, blank=False)
