from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import BasePermission
from rest_framework.response import Response
from rest_framework.utils import json
from django.contrib.sessions.models import Session

from app.models import Result, Reviewer, ProgramCommitteeMember


@api_view(['POST'])
@permission_classes((BasePermission,))
def reviewResult(request):
    data = request.body
    body = json.loads(data)
    qualifier = body['qualifier']
    suggestions = body['suggestions']
    session_key = body['reviewer']
    paper = body['paper']

    try:
        session = Session.objects.get(session_key=session_key)
    except ObjectDoesNotExist as e:
        return Response("invalid session key", 400)
    try:
        uid = session.get_decoded().get('uid')
        pcMember = ProgramCommitteeMember.objects.get(uid_id=uid)
        reviewer = Reviewer.objects.get(pcid_id=int(pcMember.id))
    except ObjectDoesNotExist as e:
        return Response("could not find author", 400)

    print(qualifier, suggestions, reviewer, paper)
    result = Result.objects.filter(rid_id=reviewer.id, prid_id=paper).first()
    result.suggestions = suggestions
    result.qualifier = qualifier
    result.save()
    return Response("ok", 200)
#
