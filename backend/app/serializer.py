from django.contrib.auth.models import User
from rest_framework import serializers
from app.models import Conference, Section, Proposal, ProgramCommitteeMember, WishToReview, Reviewer


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


class ReviewerSerializer(serializers.ModelSerializer):
    pcid = ProgramCommitteeAndInfoSerializer(read_only=True)

    class Meta:
        model = Reviewer
        fields = ('id', 'pcid')


class PapersToReviewAssignSerializer(serializers.ModelSerializer):
    wishToReview = ReviewerSerializer(read_only=True, many=True)

    class Meta:
        model = Proposal
        fields = ('id', 'name', 'wishToReview')


class ChairSectionPaperSerializer(serializers.ModelSerializer):
    papers = PapersToReviewAssignSerializer(read_only=True, many=True)

    class Meta:
        model = Section
        fields = ('id', 'name', 'chair_id', 'papers')
