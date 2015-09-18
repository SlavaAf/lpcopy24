#coding: utf-8
from django.shortcuts import render


def index_view(request):
    object_list = [1, 2, 3]
    return render(request, 'index.html', {'object_list': object_list})