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


class ProposalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Proposal
        fields = ('id', 'name', 'keyWords', 'abstract', 'pdf', 'isAccepted', 'aid_id', 'sid_id')


class SectionSeriaizer(serializers.ModelSerializer):

    class Meta:
        model = Proposal
        fields = ('id', 'name', 'keyWords', 'abstract', 'pdf', 'isAccepted', 'aid_id')

