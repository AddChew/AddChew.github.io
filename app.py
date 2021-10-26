from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return redirect(url_for("navigate_to", page = "about.html"))


@app.route("/<string:page>")
def navigate_to(page: str):
    return render_template(page)