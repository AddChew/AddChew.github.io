from flask import Flask, render_template, redirect, url_for
from flask_frozen import Freezer


app = Flask(__name__)
freezer = Freezer(app)


@app.route("/")
def index():
    return redirect(url_for("navigate_to", page = "index.html"))


@app.route("/<string:page>")
def navigate_to(page: str):
    return render_template(page)


if __name__ == "__main__":
    # app.run()
    freezer.freeze()