from django.db import models


# models, serializers, views, urls
# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.CharField(max_length=500)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Login(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=100)
    keyVal = models.CharField(max_length=10)

    def __str__(self):
        return self.username


class Register(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=100)
    passwordConf = models.CharField(max_length=100)
    keyVal = models.CharField(max_length=10)

    def __str__(self):
        return self.username
    

class Chat(models.Model):
    questions = models.CharField(max_length=1000)
    answers = models.TextField()

    def __str__(self):
        return self.answers
    
