from django.shortcuts import render



def guest(request):
	context = locals()
	template = 'guest.html'
	return render(request, template, context)

def home(request):
	context = locals()
	template = 'home.html'
	return render(request, template, context)


def about(request):
	context = locals()
	template = 'about.html'
	return render(request, template, context)


def userprofile(request):
	context = locals()
	template = 'userprofile.html'
	return render(request, template, context)
