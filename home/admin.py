# coding: utf-8
from django.contrib import admin
from home.models import *
from pytils.translit import slugify

# Register your models here.


class SitesAdmin(admin.ModelAdmin):
    search_fields = ['name']
    prepopulated_fields = {"slug": ("name",)}
    list_display = ('name', 'pass_dir', 'url',)


class OrderAdmin(admin.ModelAdmin):
    search_fields = ['mail']
    list_display = ('date', 'mail', )
    raw_id_fields = ['s_name']


admin.site.register(Sites, SitesAdmin)
admin.site.register(Order, OrderAdmin)
