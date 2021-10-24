from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/<string:page>")
def navigate_to(page: str = "about.html"):
    return render_template(page)