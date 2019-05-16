"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from app.views import *
from app.views.add_conference_view import AddConfereceView
from app.views.proposal_view import ProposalView
from app.views.section_view import SectionView
from app.views.user_auth import auth

router = routers.DefaultRouter()
router.register(r'users', HelloView, 'user')
router.register(r'conferences', ConferenceView)
router.register(r'sectionsbyconf', SectionByConferenceView, base_name='sectionbyconf')
router.register(r'sections', SectionView, base_name='section')
router.register(r'proposals', ProposalView, base_name='proposal')

urlpatterns = [
    # url(r'^', include('', namespace='app')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('auth/', auth, name='auth'),
    # path('logout/', logout, name='logout'),
    # path('test/', , name='test'),
    path('register-author/', RegisterAuthorView.registerAuthor, name='register-author'),
    path('add-conference/', AddConfereceView.addConference, name='add-conference')

    # path('auth/', LoginView)
]
