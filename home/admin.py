# coding: utf-8
from django.http import HttpResponse
import json

from django.contrib import admin
from home.models import *
from home.DataBaseController import DataBaseController
from home.Downloader import SiteParser
from pytils.translit import slugify

# Register your models here.

def url_validate(url):
    if str(url).find("http://") >= 0 or str(url).find("https://") >= 0:
        pass
    else:
        url = "http://" + url
        return url
    return url


class SitesAdmin(admin.ModelAdmin):
    search_fields = ['name']
    prepopulated_fields = {"slug": ("name",)}
    list_display = ('name', 'path_dir', 'url',)

    def save_model(self, request, obj, form, change):
        db = DataBaseController()
        url = url_validate(obj.url)

        list_sites = db.get_list_sites(url)
        data = {}

        if len(list_sites) == 0:
            parser = SiteParser()
            data = parser.save_site(url)

            if data == "Site not found":
                return HttpResponse(json.dumps({'error_code': 1}), content_type='application/json')

        obj.url = data['url']
        obj.path_dir = data['path_dir']
        obj.path_index = data['path_index']
        obj.path_img = data['path_img']
        obj.path_tar = data['path_tar']

        super(SitesAdmin, self).save_model(request, obj, form, change)


class OrderAdmin(admin.ModelAdmin):
    search_fields = ['mail']
    list_display = ('date', 'mail',)
    raw_id_fields = ['s_name']


admin.site.register(Sites, SitesAdmin)
admin.site.register(Order, OrderAdmin)
