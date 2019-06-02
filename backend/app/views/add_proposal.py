from django.contrib.sessions.models import Session
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import BasePermission
from rest_framework.response import Response
from rest_framework.utils import json
from django.core.exceptions import ObjectDoesNotExist
from app.models import Author, Proposal
from django.core.files.base import ContentFile


@api_view(['POST'])
@permission_classes((BasePermission,))
def add_poposals(request):
    data = request.body
    body = json.loads(data)
    name = body['name']
    keywords = body['keywords']
    abstract = body['abstract']
    proposal = body['proposal']
    sid_id = int(body['sid_id'])
    session_key = body['session_key']

    try:
        session = Session.objects.get(session_key=session_key)
    except ObjectDoesNotExist as e:
        return Response("invalid session key", 400)

    try:
        uid = session.get_decoded().get('uid')
        author = Author.objects.get(uid_id=uid)
    except ObjectDoesNotExist as e:
        return Response("could not find author", 400)

    if author is not None:
        proposal = Proposal.objects.create(name=name, keyWords=keywords, abstract=abstract, pdf=proposal, sid_id=sid_id,
                                           aid_id=author.id)
        return Response("ok", 200)
    else:
        return Response("couldn't add proposal", 400)


@api_view(['POST'])
@permission_classes((BasePermission,))
def add_pdf(request):
    data = request.body
    body = json.loads(data)

    # with open("/home/razvan/prog/conference/backend/app/file1.pdf", "wb") as f:
    #     f.write(body['file'])
    #
    # with open("/home/razvan/prog/conference/backend/app/file1.pdf", "r") as f:
    #     print(f.readline())

    for filename, file in request.FILES.iteritems():
        name = request.FILES[filename].name
        print(name)

    return Response("ok", 200)