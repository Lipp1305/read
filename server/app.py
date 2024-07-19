#This is the main file of the server.
#It creates a Flask app and registers the routes from the routes.py file. 
#It also starts the server.

from flask import Flask # type: ignore
from routes import main

app = Flask(__name__)
app.register_blueprint(main)

if __name__ == '__main__':
    app.run(debug=True)
