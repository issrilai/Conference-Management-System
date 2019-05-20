from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json


class SubmitProposalView():
    @api_view(['POST'])
    def submitProposal(request):
        data = request.body
        body = json.loads(data)
        name = body['name']
        keywords = body['keywords']
        abstract = body['abstract']
        proposal = body['proposal']
        print(name, keywords, abstract, proposal)
        return Response("ok", 200)