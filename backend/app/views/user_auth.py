from django.contrib.auth import authenticate
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import BasePermission
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_401_UNAUTHORIZED, HTTP_403_FORBIDDEN
from rest_framework.utils import json
from app.models import Chair, Author, Reviewer
from app.models import ProgramCommitteeMember


@api_view(['GET'])
def logout(request):
    # logout(request)
    username = None  # default value
    if request.method == 'GET':
        if 'action' in request.GET:
            action = request.GET.get('action')
            if action == 'logout':
                if 'username' in request.session:
                    request.session.flush()
                # return redirect('auth')
    #
    # if 'username' in request.session: username = request.session['username'] print(request.session.get_expiry_age(
    # ))  # session lifetime in seconds(from now) print(request.session.get_expiry_date())  # datetime.datetime
    # object which represents the moment in time at which the session will expire


@api_view(['POST'])
@permission_classes((BasePermission,))
def auth(request):
    data = request.body
    body = json.loads(data)
    username = body['username']
    password = body['password']

    # propo_on_sect = Proposal.objects.select_related('section')
    #
    # for i in propo_on_sect:
    #     print(i)

    # if 'username' in request.session:
    #     print(request.session['username'])

    # sess = Session.objects.get(pk='an79nyccjkuy47mt4i0a5ztpmy02gcpy')
    # print(sess.session_data)
    # print(sess.get_decoded())
    # sess.delete()

    if request.user.is_authenticated:
        return Response("Already authenticated", status=HTTP_403_FORBIDDEN)
    else:
        user = authenticate(username=username.strip(), password=password.strip())

        if user is not None:
            # login(request, user)

            # request.session['username'] = user.username
            # if request.session.session_key is None:
            #     request.session.save()
            # session_key = request.session.session_key
            session_key = "key"

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
