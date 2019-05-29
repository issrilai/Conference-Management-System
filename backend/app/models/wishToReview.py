from django.db import models

from app.models.proposal import Proposal
from app.models.reviewer import Reviewer


class WishToReview(models.Model):

    rid = models.ForeignKey(Reviewer, on_delete=models.CASCADE, blank=False, related_name='reviewer')
    prid = models.ForeignKey(Proposal, on_delete=models.CASCADE, blank=False, related_name='proposal')
    answer = models.CharField(max_length=6, choices=[("yes", "yes"), ("maybe", "maybe"), ("no", "no")], default=False)
