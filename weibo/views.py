from django.shortcuts import render,HttpResponse,redirect
import json
from weibo import models
from django.core.cache import cache
from io import BytesIO
import uuid


def userLogin(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        passwd = request.POST.get('passwd')
        accessLogin = request.POST.get('accessLogin')
        verify = request.POST.get('verify').upper()
        imgId = request.POST.get('imgId')

        if( cache.get(imgId) == None or cache.get(imgId).upper() != verify):
            return HttpResponse(json.dumps({'status': 'error','msg':'验证码错误'}), content_type='application/json; charset=utf-8')
        else:
            try:
                userInfo =  models.UserInfo.objects.filter(email=email)[0]
                if(userInfo.passwd == passwd):
                    cache.set(str(uuid.uuid1())+email, {'isLogin': True,'email':email})
                    # cache.delete(imgId)
                    return HttpResponse(json.dumps({'status': 'success', 'msg':
                        {'userName':userInfo.username,
                         'token': str(uuid.uuid1())+email}}),content_type='application/json; charset=utf-8')
                else:
                    print("密码错误")
                    return HttpResponse(json.dumps({'status': 'error','msg':'用户名或密码错误'}), content_type='application/json; charset=utf-8')
            except:
                print("用户名不存在")
                return HttpResponse(json.dumps({'status': 'error','msg':'用户名或密码错误'}), content_type='application/json; charset=utf-8')


from untils.check_code import create_validate_code
from django.core.handlers.wsgi import WSGIRequest
def VerifyCode(request):
    auuid = request.GET.get('id')

    stream = BytesIO()
    img, code = create_validate_code()
    img.save(stream, 'PNG')

    cache.set(auuid, code, 60*5)
    print(1111111111111, request.environ['HTTP_USER_AGENT'] )

    if 'HTTP_X_FORWARDED_FOR' in request.META:
        ip = request.META['HTTP_X_FORWARDED_FOR']
    else:
        ip = request.META['REMOTE_ADDR']
    print(ip)
    return HttpResponse(stream.getvalue())