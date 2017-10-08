from flask import Flask
import os
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_folder='../static', template_folder='../static')

basedir = os.path.abspath(os.path.dirname(__file__))
db_path = os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path
db = SQLAlchemy(app)

from backend.model.user import User
db.create_all()
db.session.commit()
if User.query.get(1) is None:
    u = User(username='john')
    u.set_password('cat')
    db.session.add(u)
    db.session.commit()

import backend.views
