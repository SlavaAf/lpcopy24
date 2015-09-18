# coding: utf-8
from django.db import models
from datetime import datetime

# Create your models here.


class Sites(models.Model):
    name = models.CharField(verbose_name=u'Наименование', max_length=100, unique=True)
    slug = models.SlugField(verbose_name=u'Ссылка', unique=True, default='')
    url = models.CharField(verbose_name=u'Ссылка сайта', unique=True, default='', max_length=100)
    pass_dir = models.CharField(verbose_name=u'Путь в корне', unique=True, default='', max_length=100)

    class Meta:
        verbose_name = 'сайт'
        verbose_name_plural = 'Сайты'


class Order(models.Model):
    mail = models.EmailField(verbose_name=u'E-mail')
    date = models.DateTimeField(verbose_name='Дата покупки', default=datetime.now())
    name = models.ForeignKey('home.Sites', related_name='sites_ord', verbose_name=u'Название сайта', blank=True, null=True, default=None )
    code_pay = models.CharField(verbose_name=u'Номер оплаты', unique=True, max_length=160)
    pay_status = models.BooleanField(verbose_name=u'Статус оплаты', default=False)

    class Meta:
        verbose_name = 'заказ'
        verbose_name_plural = 'заказы'
