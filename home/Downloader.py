# -*- coding: utf-8 -*-
import tarfile, os, subprocess
import sqlite3
import random
import string


class SiteParser:
    arch_folder = " --directory-prefix=static/sites"
    # command = 'wget.sh '
    command = '/usr/local/bin/wget -r -l10 -k -p -E -nc '

    def __init__(self):
        pass

    def save_site(self, url):
        folder = ''.join(
            random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for x in range(16))
        print(folder)
        os.mkdir("static/sites/" + folder)
        subprocess.call(self.command + url + self.arch_folder + '/' + folder, shell=True)

        dirs = os.listdir("static/sites/" + folder)

        if len(dirs) > 0:
            tar = tarfile.open("static/tars/" + folder + ".tar.gz", "w:gz")
            tar.add("static/sites/" + folder + '/' + dirs[0] + "/", folder)

            tar.close()
            print("end")
