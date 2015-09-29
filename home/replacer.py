# coding: utf-8
import os
import re
import shutil
import zipfile

from home.models import *


class Replacer:
    def __init__(self):
        pass

    def replace_text(self, name, old="", new=""):
        sites = Sites.objects.filter(name=name)

        if len(sites) > 0:
            site = sites[0]
            if not os.path.exists('static/tmp/'+site.name):
                shutil.copytree('static/sites/' + site.name, 'static/tmp/' + site.name)

                path_index = "static/tmp/" + site.path_index[13:]
                data = open(str(site.path_index), encoding="utf8").read()

                f = open(path_index, "w")
                f.write(re.sub(old, new, data))
                f.close()

                zip_f = zipfile.ZipFile("static/tmp/" + site.name + ".zip", 'w')
                for root, dir_files, files in os.walk("static/tmp/" + site.name):
                    for file in files:
                        zip_f.write(os.path.join(root, file))
                zip_f.close()

                return "static/tmp/" + site.name + ".zip"
        return ""
