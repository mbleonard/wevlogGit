from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings

from .forms import ContactForm

def contact(request):
	title = 'Contact'
	form = ContactForm(request.POST or None)
	context = {
		'title': title, 'form': form }

	if form.is_valid():
		# print (form.cleaned_data['email'], form.cleaned_data['comment'], settings.EMAIL_HOST_USER)
		name = form.cleaned_data['name']
		comment = form.cleaned_data['comment']
		subject = 'Message from MYSITE.com'
		message = '%s %s' %(comment, name)
		from_email = form.cleaned_data['email']
		recipient_list = [settings.EMAIL_HOST_USER]
		send_mail(subject, message, from_email, recipient_list, fail_silently = False)
	
	template = 'contact.html'
	return render(request, template, context)

