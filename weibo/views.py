from django.shortcuts import render,HttpResponse,redirect
import json
from weibo import models
from io import BytesIO


def userLogin(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        passwd = request.POST.get('passwd')
        accessLogin = request.POST.get('accessLogin')
        verify = request.POST.get('verify').upper()
        print("aaaaaaaaaaaaaaaaaa",request.session.get('VerifyCode'))
        # try:
        #     if verify == request.session.get('VerifyCode'):
        #         userInfo = models.UserInfo.objects.filter(email=email)[0]
        #         if userInfo.passwd == passwd:
        #             return HttpResponse(json.dumps(DATA), content_type="application/json")
        # except:
        return HttpResponse('200')



from untils.check_code import create_validate_code
def VerifyCode(request):
    stream = BytesIO()
    img, code = create_validate_code()
    img.save(stream, 'PNG')
    request.session['VerifyCode'] = code
    print("bbbbbbbbbbbbbbbbbbbbb", request.session.get('VerifyCode'))
    return HttpResponse(stream.getvalue())