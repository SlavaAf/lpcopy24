import sqlite3

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