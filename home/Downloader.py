# -*- coding: utf-8 -*-
import tarfile, os
import sqlite3


class SiteParser:
    arch_folder = " --directory-prefix=static/sites"
    # command = 'wget.sh '
    command = '/usr/local/bin/wget -r -l10 -k -p -E -nc '

    def __init__(self):
        pass

    def save_site(self, url):
        # subprocess.call([self.command + url + self.arch_folder], shell=True)
        os.system(self.command + url + self.arch_folder)

        os.system("")
        dirs = os.listdir("static/sites")

        if len(dirs) > 0:
            tar = tarfile.open("static/tars/" + dirs[0] + ".tar.gz", "w:gz")
            tar.add("static/sites/" + dirs[0] + "/")

            tar.close()
            print("end")


class DataBaseController:
    db = sqlite3.connect("db.sqlite3")

    def __init__(self):
        pass

    def write_base(self, url, path_dir):
        url = "'" + url + "'"
        path_dir = "'" + path_dir + "'"
        cur = self.db.cursor()
        print("INSERT INTO landscapes (url, path_dir) VALUES (" + url + ", " + path_dir + ");")
        cur.execute("INSERT INTO landscapes (url, path_dir) VALUES (" + url + ", " + path_dir + ");")

        self.db.commit()

    def read_base(self, condition="*"):
        cur = self.db.cursor()
        print("SELECT " + condition + " FROM landscapes")
        if not condition == "*":
            cur.execute("SELECT * FROM landscapes WHERE " + condition)
        else:
            cur.execute("SELECT * FROM landscapes")
        data = cur.fetchall()
        return data
