from django.db import models

from app.models.program_committee_member import ProgramCommitteeMember


class Reviewer(models.Model):
    pcid = models.ForeignKey(ProgramCommitteeMember, on_delete=models.CASCADE, blank=False,
                             related_name='program_committee')
