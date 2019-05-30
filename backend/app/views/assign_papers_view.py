from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view
from rest_framework.utils import json
from rest_framework.response import Response

from app.models import Result


class AssignPapers:
    @api_view(['POST'])
    def addAssign(request):
        data = request.body
        body = json.loads(data)
        prid = body['prid_id']
        rid = body['rid_id']

        try:
            assign = Result.objects.get(prid_id=prid, rid_id=rid)
        except ObjectDoesNotExist as e:
            try:
                assign_instance = Result.objects.create(suggestions="", prid_id=prid, rid_id=rid)
                assign_instance.save()
            except:
                return Response("not ok", 400)
            finally:
                return Response("ok", 200)
        finally:
            return Response("ok", 200)
