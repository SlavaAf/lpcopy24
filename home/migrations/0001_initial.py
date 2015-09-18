# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('mail', models.EmailField(verbose_name='E-mail', max_length=254)),
                ('date', models.DateTimeField(verbose_name='Дата покупки', default=datetime.datetime(2015, 9, 18, 10, 0, 31, 812728))),
                ('code_pay', models.CharField(verbose_name='Номер оплаты', max_length=160, unique=True)),
                ('pay_status', models.BooleanField(verbose_name='Статус оплаты', default=False)),
            ],
            options={
                'verbose_name': 'заказ',
                'verbose_name_plural': 'заказы',
            },
        ),
        migrations.CreateModel(
            name='Sites',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(verbose_name='Наименование', max_length=100, unique=True)),
                ('slug', models.SlugField(verbose_name='Ссылка', unique=True, default='')),
                ('url', models.CharField(verbose_name='Ссылка сайта', max_length=100, unique=True, default='')),
                ('pass_dir', models.CharField(verbose_name='Путь в корне', max_length=100, unique=True, default='')),
            ],
            options={
                'verbose_name': 'сайт',
                'verbose_name_plural': 'Сайты',
            },
        ),
        migrations.AddField(
            model_name='order',
            name='name',
            field=models.ForeignKey(verbose_name='Название сайта', null=True, default=None, to='home.Sites', blank=True, related_name='sites_ord'),
        ),
    ]
