import json
import uuid
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseRedirect
from django.utils import timezone
from accounts.models import Authentication, ExtendedUser


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
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
    return HttpResponse('salam')


def signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        user = User.objects.create_user(username, email, password)
        user.save()
        extended_user = ExtendedUser.objects.create(user=user, first_name=first_name, last_name=last_name)
        extended_user.save()

        response = {'status': 'done'}
        return HttpResponse(json.dumps(response))
    else:
        return HttpResponseBadRequest()

