"coding: utf-8"
import os
import re
import shutil
import zipfile

from home.models import *


class Replacer:
    def __init__(self):
        pass

    def replace_text(self, id, old="", new=""):
        site = Sites.objects.filter(id=id)[0]
        shutil.copytree('static/sites/' + site.name, 'static/tmp')

        data = open(id).read()
        path_index = "static/tmp/" + site.path_index[13:]
        f = open("static/tmp/" + path_index[13:], "w")
        f.write(re.sub(old, new, data))
        f.close()

        zip_f = zipfile.ZipFile("static/tmp/" + site.name + ".zip", 'w')
        for root, dir_files, files in os.walk("static/tmp/" + site.name):
            for file in files:
                print(os.path.join(root, file))
                zip_f.write(os.path.join(root, file))
        zip_f.close()

        return "static/tmp/" + site.name + ".zip"


rp = Replacer()

rp.replace_text("in", u''' <script src="scripts/museredirect.js@490478987" type="text/javascript"></script>

  <script type="text/javascript">''', u'''У попа была собака, он ее любил,
она съела кусок мяса, он ее убил''')
