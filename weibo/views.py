from django.shortcuts import render,HttpResponse,redirect
import json


def userLogin(request):
    DATA = {
        'a': "111111",
        'b': "222222222222"
    }
    return HttpResponse(json.dumps(DATA), content_type="application/json")
