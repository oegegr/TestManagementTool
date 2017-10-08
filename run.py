from backend import app, db
from backend.model.user import User

app.run(host='0.0.0.0', port=8080, debug=True)

# create a development user
