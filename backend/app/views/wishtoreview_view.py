from django.contrib.sessions.models import Session
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view
from rest_framework.utils import json
from rest_framework.response import Response

from app.models import WishToReview, ProgramCommitteeMember, Reviewer


class WishToReviewView:
    @api_view(['POST'])
    def addWishToReview(request):
        data = request.body
        body = json.loads(data)
        value = body['value']
        proposal = body['proposal']
        session_key = body['session_key']

        try:
            session = Session.objects.get(session_key=session_key)
        except ObjectDoesNotExist as e:
            session = None
        rid = None
        if session is not None:
            uid = session.get_decoded().get('uid')
            try:
                pcmember = ProgramCommitteeMember.objects.get(uid_id=uid)
            except ObjectDoesNotExist as e:
                pcmember = None
            if pcmember is not None:
                try:
                    reviewer = Reviewer.objects.get(pcid_id=pcmember.id)
                except ObjectDoesNotExist as e:
                    reviewer = None

                if reviewer is not None:
                    rid = reviewer.id
                else:
                    rid = None
        if rid is not None:
            try:
                wishtoreview = WishToReview.objects.filter(prid_id=proposal, rid_id=rid).first()
            except ObjectDoesNotExist as e:
                wishtoreview = None

            if wishtoreview is not None:
                wishtoreview.answer = value
                wishtoreview.save()
            else:
                WishToReview.objects.create(answer=value, prid_id=proposal, rid_id=rid)
            return Response("ok", 200)
        else:
            return Response("not ok", 400)
