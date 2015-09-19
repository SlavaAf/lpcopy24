# -*- coding: utf-8 -*-
import fnmatch
import tarfile, os, subprocess
import random
import string
import requests


class SiteParser:
    arch_folder = " --directory-prefix=static/sites"
    # command = 'wget.sh '
    # command = '"C:/Program Files (x86)/GnuWin32/bin/wget.exe" -r -l2 -k -p -E -nc '
    command = '/usr/bin/wget -r -l10 -k -p -E -nc '

    def __init__(self):
        pass

    def save_site(self, url):
        # Download site
        folder = ''.join(
            random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for x in range(16))
        print(folder)
        print(url)
        os.mkdir("static/sites/" + folder)
        subprocess.call(self.command + url + self.arch_folder + '/' + folder, shell=True)

        dirs = os.listdir("static/sites/" + folder)

        # Create tarfile
        if len(dirs) > 0:
            pass_tar = "static/tars/" + folder + ".tar.gz"
            tar = tarfile.open(pass_tar, "w:gz")
            tar.add("static/sites/" + folder + '/' + dirs[0] + "/", folder)

            tar.close()
            print("end")

            # Get path to index.html
            index_files = self.find("index.html", "static\\sites\\" + folder)

            if len(index_files) > 0:
                # print(index_files[0])
                index_file = index_files[0]
            else:
                index_file = "None"
                # print("index.html not found")
            index_file.replace("\\", "/")

            # save site image
            p = requests.get("http://mini.s-shot.ru/1024x768/300/png/?" + url)
            pass_image = "static/img/sites/" + folder + ".png"
            out = open(pass_image, "wb")
            out.write(p.content)
            out.close()
            print("image created")

            result = {"url": url,
                      "name": folder,
                      "path_dir": dirs[0],
                      "path_index": index_file,
                      "path_img": pass_image,
                      "path_tar": pass_tar}

            return result
        else:
            os.rmdir("static/sites/" + folder)
            return "Site not found"

            # Add site to database

    def find(self, pattern, path):
        result = []
        for root, dirs, files in os.walk(path):
            for name in files:
                if fnmatch.fnmatch(name, pattern):
                    result.append(os.path.join(root, name))
        return result
