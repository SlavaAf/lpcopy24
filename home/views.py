# coding: utf-8

from django.shortcuts import render, redirect

from home.forms import *
from home.Downloader import *


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