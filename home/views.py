# coding: utf-8
from django.http import HttpResponse
import json
from django.core.urlresolvers import reverse_lazy

from django.shortcuts import render, redirect

from home.forms import *
from home.Downloader import *

from home.models import *


def index_view(request):
    object_list = Sites.objects.all()
    return render(request, 'index.html', {'object_list': object_list})


def url_validate(url):
    if str(url).find("http://") >= 0 or str(url).find("https://") >= 0:
        pass
    else:
        url = "http://" + url
        return url
    return url


def ajax_post_form(request):
    if request.is_ajax():
        url = url_validate(request.GET.get('url', None))
        user_name = request.GET.get('name', None)
        user_mail = request.GET.get('email', None)

        # create or get site
        list_sites = Sites.objects.filter(url=url)
        # print(list_sites)
        if len(list_sites) == 0:
            parser = SiteParser()
            result = parser.save_site(url)

            if result == "Site not found":
                return HttpResponse(json.dumps({'error_code': 1}), content_type='application/json')

            site = Sites(name=result['name'], slug=result['slug'], url=result['url'], path_dir=result['path_dir'],
                         path_index=result['path_index'], path_img=result['path_img'],
                         path_tar=result['path_tar'])
            site.save()
        else:
            site = list_sites[0]

        o = Order(name=user_name, mail=user_mail, s_name=site)
        o.save()

        return HttpResponse(json.dumps({'error_code': 0}), content_type='application/json')
    else:
        return redirect(reverse_lazy('index'))


def ajax_post_modal(request):
    if request.is_ajax():
        name = request.GET.get('name', None)
        mail = request.GET.get('mail', None)
        return HttpResponse(json.dumps({'error_code': 0}), content_type='application/json')
    else:
        return redirect(reverse_lazy('index'))
