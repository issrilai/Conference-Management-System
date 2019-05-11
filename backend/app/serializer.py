from rest_framework import serializers
# from django.contrib.auth.models import User
from app.models import Conference, Section, Proposal
from app.models.user import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class ConferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conference
        fields = ('id',
                  'name', 'dateStart', 'dateStop', 'abstractDeadline', 'submitDeadline', 'bidDeadline',
                  'reviewDeadline')


class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ('id', 'name', 'startHour', 'endHour', 'chair_id', 'confid_id')


class ProposalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proposal
        fields = ('id', 'name', 'keyWords', 'abstract', 'pdf', 'isAccepted', 'aid_id', 'sid_id')
