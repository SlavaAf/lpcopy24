# coding: utf-8
from distutils.sysconfig import expand_makefile_vars
from django.http import HttpResponse
import json
from django.core.urlresolvers import reverse_lazy
from home.models import *

from django.shortcuts import render, redirect
from django.core.mail import EmailMessage

from home.forms import *
from home.Downloader import *

import smtplib
from os.path import basename
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import COMMASPACE, formatdate


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


def send_mail_user(send_from, receiver, path_tar, subject="landing from lpcopy24.ru"):
    msg = MIMEMultipart(
        From=send_from,
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

        # send_to_mail_user
        send_mail_user(user_name, user_mail, site.path_tar)

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
