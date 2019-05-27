from django.contrib.auth.models import User
from rest_framework import serializers
from app.models import Conference, Section, Proposal, ProgramCommitteeMember


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')


class ConferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conference
        fields = ('id',
                  'name', 'dateStart', 'dateStop', 'abstractDeadline', 'submitDeadline', 'bidDeadline',
                  'reviewDeadline')


class SectionSeriaizer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ('id', 'name', 'startHour', 'endHour', 'chair_id', 'confid_id')


class ProposalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proposal
        fields = ('id', 'name', 'keyWords', 'abstract', 'pdf', 'isAccepted', 'aid_id', 'sid_id')


class ProgramCommitteeAndInfoSerializer(serializers.ModelSerializer):
    uid = UserSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'uid')
