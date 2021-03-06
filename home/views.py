# coding: utf-8
from distutils.sysconfig import expand_makefile_vars
from django.http import HttpResponse
import json
from django.core.urlresolvers import reverse_lazy
from home.DataBaseController import DataBaseController
from home.models import *
from home.replacer import Replacer

from django.shortcuts import render, redirect
from django.core.mail import EmailMessage

from home.forms import *
from home.Downloader import *
from home.replacer import Replacer

import shutil
from os.path import basename
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import COMMASPACE, formatdate


def index_view(request):
    object_list = Sites.objects.all()
    return render(request, 'index.html', {'object_list': object_list})


def sites_view(request, pk):
    site = Sites.objects.get(pk=pk)
    return render(request, 'base_index.html', {'site': site})


def url_validate(url):
    if str(url).find("http://") >= 0 or str(url).find("https://") >= 0:
        pass
    else:
        url = "http://" + url
        return url
    return url


def send_mail_user(send_from, receiver, path_tar, subject="landing from lpcopy24.ru"):
    msg = MIMEMultipart(
        # From=send_from,
        To=COMMASPACE.join(receiver),
        Date=formatdate(localtime=True),
        Subject=subject
    )
    msg.attach(MIMEText("Thank you for your purchase"))
    with open(path_tar, "rb") as fil:
        msg.attach(MIMEApplication(
            fil.read(),
            Content_Disposition='attachment; filename="%s"' % basename(path_tar),
            Name=basename(path_tar)
        ))
    try:
        email = EmailMessage(subject, "Thank you for your purchase")
        email.to = [receiver]
        email.attach(msg)
        email.send()
        print("Send successful")
    except BaseException:
        print("Send failed")


def ajax_post_form(request):
    if request.is_ajax():
        db = DataBaseController()
        url = url_validate(request.GET.get('url', None))
        name = request.GET.get('name', None)
        mail = request.GET.get('email', None)

        # create or get site
        list_sites = db.get_list_sites(url)
        data = {}

        if len(list_sites) == 0:
            parser = SiteParser()
            data = parser.save_site(url)

            if data == "Site not found":
                return HttpResponse(json.dumps({'error_code': 1}), content_type='application/json')

        site = db.get_site(url, data)

        o = Order(name=name, mail=mail, s_name=site)
        o.save()

        # send_to_mail_user
        boll = request.GET.get('boll', False)
        old_text = request.GET.get('old_text', "")
        new_text = request.GET.get('new_text', "")

        if boll == 'false':
            send_mail_user(name, mail, site.path_tar)
        else:
            rp = Replacer()
            temp_path = rp.replace_text(site.name, old_text, new_text)
            if len(temp_path) > 0:
                send_mail_user(name, mail, temp_path)
                shutil.rmtree(temp_path[:-4])

        return HttpResponse(json.dumps({'error_code': 0}), content_type='application/json')
    else:
        return redirect(reverse_lazy('index'))


def ajax_post_modal(request):
    if request.is_ajax():
        name = request.GET.get('name', None)
        mail = request.GET.get('email', None)
        pk = request.GET.get('pk', None)
        boll = request.GET.get('boll', False)
        old_text = request.GET.get('old_text', "")
        new_text = request.GET.get('new_text', "")
        db = DataBaseController()

        site = Sites.objects.filter(id=pk)[0]
        o = Order(name=name, mail=mail, s_name=site)
        o.save()

        if boll == 'false':
            send_mail_user(name, mail, site.path_tar)
        else:
            rp = Replacer()
            temp_path = rp.replace_text(site.name, old_text, new_text)
            if len(temp_path) > 0:
                send_mail_user(name, mail, temp_path)
                shutil.rmtree(temp_path[:-4])

        return HttpResponse(json.dumps({'error_code': 0}), content_type='application/json')
    else:
        return redirect(reverse_lazy('index'))
