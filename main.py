from flask import Flask
from flask import render_template
from flask import request, jsonify, Markup
import getpass

import data

app = Flask(__name__,
            static_url_path='', 
            static_folder='static',
            template_folder='templates')

#Get userlogin
username = getpass.getuser()

@app.route('/test')
def main():
    return ""

#Routing Pages
@app.route('/')
def index():
    return render_template("index.html", username=username) , 200

@app.route('/page2')
def page2():
    return render_template("page2.html", username=username) , 200

#API
@app.route('/all', methods=['GET'])
def all():
    database = data.Database()
    result = database.queryall()
    return result

@app.route('/new', methods=['POST'])
def new():
    database = data.Database()
    raw_data = request.get_json(force=True)
    result = database.createnewticket(raw_data)
    return result

