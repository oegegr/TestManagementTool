from flask import render_template, g, jsonify, Blueprint
from flask_httpauth import HTTPBasicAuth
from backend.model.user import User
from backend import app


api = Blueprint('api', __name__)
auth = HTTPBasicAuth()
auth_token = HTTPBasicAuth()


class ValidationError(ValueError):
    pass


@app.errorhandler(ValidationError)
def bad_request(e):
    response = jsonify({'status': 400, 'error': 'bad request',
                        'message': e.args[0]})
    response.status_code = 400
    return response


@app.errorhandler(404)
def not_found(e):
    response = jsonify({'status': 404, 'error': 'not found',
                        'message': 'invalid resource URI'})
    response.status_code = 404
    return response


@app.errorhandler(405)
def method_not_supported(e):
    response = jsonify({'status': 405, 'error': 'method not supported',
                         'message': 'the method is not supported'})
    response.status_code = 405
    return response


@app.errorhandler(500)
def internal_server_error(e):
    response = jsonify({'status': 500, 'error': 'internal server error',
                        'message': e.args[0]})
    response.status_code = 500
    return response


@auth.error_handler
def unauthorized():
    response = jsonify({'status': 401, 'error': 'unauthorized',
                        'message': 'please authenticate'})
    response.status_code = 401
    return response

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')


@auth.verify_password
def verify_password(username, password):
    g.user = User.query.filter_by(username=username).first()
    if g.user is None:
        return False
    return g.user.verify_password(password)


@auth_token.verify_password
def verify_auth_token(token, unused):
    g.user = User.verify_auth_token(token)
    return g.user is not None


@api.before_request
@auth_token.login_required
def before_request():
    pass


@app.route('/get-auth-token')
@auth.login_required
def get_auth_token():
    return jsonify({'token': g.user.generate_auth_token()})


app.register_blueprint(api)
