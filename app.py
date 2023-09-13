from flask import Flask, render_template, request, redirect, url_for
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
import json

app = Flask(__name__)


class User(UserMixin):
    def __init__(self, id_: int, username: str, password: str):
        if not isinstance(id_, int):
            raise TypeError("User id must be integer")
        self.id_ = id_
        if not isinstance(username, str):
            raise TypeError("Username must be string")
        self.username = username
        if not isinstance(password, str):
            raise TypeError("Password must be string")
        self.password = password

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return str(self.id_)


db = 'test-db.json'


def load_user(user_id):
    with open(db) as f:
        data = json.load(f)
        for i in data:
            user_id = ['id']
            username = ['username']
            password = ['password']
        return User(user_id, 'username', 'password')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/knowledge-base')
def knowledge_base():
    return render_template('knowledge-base.html')


@app.route('/profile')
def profile():
    return render_template('profile.html')


if __name__ == '__main__':
    app.run()
