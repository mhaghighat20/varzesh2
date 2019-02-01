import json
import uuid
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseRedirect
from django.utils import timezone
from accounts.models import Authentication, ExtendedUser


def login_view(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        username = body['username']
        password = body['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            token = str(uuid.uuid4())
            Authentication.objects.filter(user=user).delete()
            auth = Authentication.objects.create(user=user, auth_token=token, creation_date=timezone.now())
            auth.save()
            response = {'token': token}
            json_response = json.dumps(response)
            return HttpResponse(json_response)
        else:
            return HttpResponse('Unauthorized', status=401)

    return HttpResponseBadRequest()


def is_logged_in(request, login_token):
    response = {
        'loggedIn': False
    }
    if Authentication.objects.filter(auth_token=login_token).exists():
        response['loggedIn'] = True

    return HttpResponse(json.dumps(response))


def logout(request, login_token):
    Authentication.objects.filter(auth_token=login_token).delete()
    return HttpResponse()


def signup(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        username = body['username']
        password = body['password']
        first_name = body['first_name']
        last_name = body['last_name']
        email = body['email']
        user = User.objects.create_user(username, email, password, first_name=first_name, last_name=last_name)
        user.save()
        extended_user = ExtendedUser.objects.create(user=user)
        extended_user.save()

        response = {'status': 'done'}
        return HttpResponse(json.dumps(response))
    else:
        return HttpResponseBadRequest()

