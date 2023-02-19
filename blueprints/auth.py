from flask import Blueprint, render_template

bp = Blueprint("auth", __name__, url_prefix="/auth")

# @bp.route("/register")
# def login():
#   pass

@bp.route("/login")
def register():
  return render_template("login.html")