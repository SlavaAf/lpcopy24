# coding: utf-8
from django.db import models
from datetime import datetime

# Create your models here.


class Sites(models.Model):
    name = models.CharField(verbose_name=u'Наименование', max_length=100)
    slug = models.SlugField(verbose_name=u'Ссылка', default='')
    url = models.CharField(verbose_name=u'Ссылка сайта', default='', max_length=100)
    path_dir = models.CharField(verbose_name=u'Путь в корне', default='', max_length=250, editable=False)
    path_index = models.CharField(verbose_name=u'Путь до index.html', default='', max_length=250, editable=False)
    path_img = models.CharField(verbose_name=u'Путь до картинки', default='', max_length=250, editable=False)
    path_tar = models.CharField(verbose_name=u'Путь до архива', default='', max_length=250, editable=False)

    class Meta:
        verbose_name = 'сайт'
        verbose_name_plural = 'Сайты'


class Order(models.Model):
    s_name = models.ForeignKey(Sites, verbose_name=u'Название сайта', blank=True, null=True,)
    name = models.CharField(verbose_name=u'Заказчик', max_length=100)
    mail = models.EmailField(verbose_name=u'E-mail')
    date = models.DateTimeField(verbose_name='Дата покупки', default=datetime.now())

    class Meta:
        verbose_name = 'заказ'
        verbose_name_plural = 'заказы'
