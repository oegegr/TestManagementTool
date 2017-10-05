from flask import render_template, g, jsonify
from flask_httpauth import HTTPBasicAuth
from backend.model.user import User
from backend import app


auth = HTTPBasicAuth()
auth_token = HTTPBasicAuth()


class ValidationError(ValueError):
    pass


@app.route('/')
def hello_world():
    return render_template('index.html')


@auth.verify_password
def verify_password(username, password):
    g.user = User.query.filter_by(username=username).first()
    if g.user in None:
        return False
    return g.user.verify_password(password)


@app.before_request
@auth.login_required
def before_request():
    pass


@auth.error_handler
def unauthorized():
    response = jsonify({
         'status': 401,
         'error': 'unauthorized',
         'message': 'please authenticate'
         })
    response.status_code = 401
    return response
