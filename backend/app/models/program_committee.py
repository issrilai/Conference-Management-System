from django.db import models

from app.models.conference import Conference
from app.models.program_committee_member import ProgramCommitteeMember


class ProgramCommittee(models.Model):

    pcid = models.ForeignKey(ProgramCommitteeMember, on_delete=models.CASCADE, blank=False)
    confid = models.ForeignKey(Conference, on_delete=models.CASCADE, blank=False)
