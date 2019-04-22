from django import forms
from django.contrib.auth import authenticate
from django.shortcuts import render, redirect


class FormLogin(forms.Form):
    username = forms.CharField(label="Username", required=True)
    password = forms.CharField(label="Password", widget=forms.PasswordInput, required=True)


def auth(request):
    username = None  # default value
    form_login = FormLogin()
    if request.method == 'GET':
        if 'action' in request.GET:
            action = request.GET.get('action')
            if action == 'logout':
                if 'username' in request.session:
                    request.session.flush()
                return redirect('auth')

        if 'username' in request.session:
            username = request.session['username']
            print(request.session.get_expiry_age())  # session lifetime in seconds(from now)
            print(request.session.get_expiry_date())  # datetime.datetime object which represents the moment in time at
            # which the session will expire

    elif request.method == 'POST':
        form_login = FormLogin(request.POST)
        password = None

        if form_login.is_valid():
            username = form_login.cleaned_data['username']
            password = form_login.cleaned_data['password']

        user = authenticate(username=username.strip(), password=password.strip())

        if user is not None:
            request.session['username'] = username
        else:
            request.session['error'] = 'Not valid credentials'
            username = None

    return render(request, 'sessions.html', {
        'demo_title': 'Sessions in Django',
        'form': form_login,
        'username': username,
    })
