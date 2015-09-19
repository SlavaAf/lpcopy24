# coding: utf-8
from django.http import HttpResponse
import json
from django.core.urlresolvers import reverse_lazy

from django.shortcuts import render, redirect

from home.forms import *
from home.Downloader import *

from home.models import *

def index_view(request):
    form = AddPartForm(request.POST or None)
    if request.method == 'POST' and form.is_valid():
        parser = SiteParser()
        url = request.POST.get('url')
        url = url_validate(url)

        parser.save_site(url)
        #
        return redirect('/')
    else:

        return render(request, 'index.html', {'form': form})


def url_validate(url):
    if str(url).find("http://") >= 0 or str(url).find("https://") >= 0:
        pass
    else:
        url = "http://"+url
        return url
    return url


def ajax_post_form(request):
    if request.is_ajax():
        url = url_validate(request.GET.get('url', None))
        user_name =  request.GET.get('name', None)
        user_mail = request.GET.get('email', None)

        parser = SiteParser()

        result = parser.save_site(url)

        if result == "Site not found":
            return HttpResponse(json.dumps({'error_code': 1}), content_type='application/json')

        # create or get site
        site = Sites(name=result['name'], url=result['url'], path_dir=result['path_dir'],
                                    path_index=result['path_index'], path_img=result['path_img'],
                                    path_tar=result['path_tar'])
        site.save()
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