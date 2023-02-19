from flask import Blueprint, render_template
from exts import mail
from flask_mail import Message

bp = Blueprint("auth", __name__, url_prefix="/auth")

# @bp.route("/register")
# def login():
#   pass

@bp.route("/login")
def register():
  return render_template("login.html")

@bp.route("/mail/test")
def mail_test():
  msg = Message('Hello', sender = "internetexplorers2023@gmail.com", recipients = ['2843182910@qq.com'])
  msg.body = "InternetExplorers跟你打招呼说： hey 李睿婷是傻子🐷"
  mail.send(msg)
  return "Sent"