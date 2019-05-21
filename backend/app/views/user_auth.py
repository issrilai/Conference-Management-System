from django.contrib.auth import authenticate
from django.contrib.sessions.models import Session
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import BasePermission
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_401_UNAUTHORIZED, HTTP_403_FORBIDDEN
from rest_framework.utils import json
from app.models import Chair, Author, Reviewer
from app.models import ProgramCommitteeMember


@api_view(['POST'])
def logout(request):
    data = request.body
    body = json.loads(data)
    key = body['session_key']

    try:
        session = Session.objects.get(session_key=key)
    except ObjectDoesNotExist as e:
        session = None

    if session is not None:
        uid = session.get_decoded().get('uid')
        print(uid)
        session.delete()
        return Response("Okay", status=HTTP_200_OK)

    return Response("You are not logged", status=HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
@permission_classes((BasePermission,))
def auth(request):
    data = request.body
    body = json.loads(data)
    username = body['username']
    password = body['password']

    if request.user.is_authenticated:
        return Response("Already authenticated", status=HTTP_403_FORBIDDEN)
    else:
        user = authenticate(username=username.strip(), password=password.strip())

        if user is not None:
            # login(request, user)

            request.session['uid'] = user.id
            if request.session.session_key is None:
                request.session.save()
            session_key = request.session.session_key
            # session_key = "key"

            role = 'listener'
            is_author = Author.objects.filter(uid_id=user.id)

            if len(is_author) != 0:
                role = 'author'
            else:
                is_committee_member = ProgramCommitteeMember.objects.filter(uid_id=user.id)

                if len(is_committee_member) != 0:
                    role = 'cm'
                    cm = is_committee_member[0]
                    is_chair = Chair.objects.filter(pcid_id=cm.id)
                    is_reviewer = Reviewer.objects.filter(pcid_id=cm.id)

                    if len(is_chair) != 0:
                        role = 'chair'
                    elif len(is_reviewer) != 0:
                        role = 'reviewer'

            return JsonResponse({'session_key': session_key, 'role': role}, status=HTTP_200_OK)

        else:
            request.session['error'] = 'Not valid credentials'
            return Response("Invalid credentials", status=HTTP_401_UNAUTHORIZED)
