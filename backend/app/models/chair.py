from django.db import models

from app.models.program_committee_member import ProgramCommitteeMember


class Chair(models.Model):

    pcid = models.ForeignKey(ProgramCommitteeMember, on_delete=models.CASCADE, blank=False)
