from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string


def send_confirmation_email(name,token,receiver):
    subject = 'Confirm your account'
    sender = 'emmanuelthedeveloper@gmail.com'

    text_content = render_to_string('email/confirm.txt',{"name":name,"token":token})
    html_content = render_to_string('email/confirm.html',{"name":name,"token":token})

    msg = EmailMultiAlternatives(subject,text_content,sender,[receiver])
    msg.attach_alternative(html_content,'text/html')
    msg.send()