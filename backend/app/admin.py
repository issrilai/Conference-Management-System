from django.contrib import admin
from app.models import Listener


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username')


class ListenerAdmin(admin.ModelAdmin):
    list_display = ['id']


admin.site.register(Listener, ListenerAdmin)