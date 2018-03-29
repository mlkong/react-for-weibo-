from django.db import models
import django.utils.timezone as timezone
# Create your models here.
# 用户信息表
class UserInfo(models.Model):
    username=models.CharField(max_length=32,unique=True,null=False)
    passwd = models.CharField(max_length=32,null=False)
    email=models.CharField(max_length=32,null=False)
    nickname=models.CharField(max_length=32,null=False,unique=True)
    phone = models.CharField(max_length=32,null=False)
