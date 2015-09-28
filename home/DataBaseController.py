# coding: utf-8
from home.models import *


class DataBaseController:
    def __init__(self):
        pass

    @staticmethod
    def get_list_sites(url):
        return Sites.objects.filter(url=url)

    def get_site(self, url, data):
        list_sites = self.get_list_sites(url)
        if len(list_sites) == 0 and data != {}:
            site = Sites(name=data['name'], slug=data['slug'], url=data['url'], path_dir=data['path_dir'],
                         path_index=data['path_index'], path_img=data['path_img'],
                         path_tar=data['path_tar'])
            site.save()
            return site
        else:
            return list_sites[0]
