from rest_framework import viewsets

from app.models import WishToReview
from app.serializer import WishToReviewSerializer


class TestWishToReview(viewsets.ModelViewSet):
    queryset = WishToReview.objects.all()
    serializer_class = WishToReviewSerializer
