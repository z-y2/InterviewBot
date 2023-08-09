from rest_framework import serializers
from .models import Todo, Login, Register, Chat

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description','completed')

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ('username', 'password', 'keyVal')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = ('username', 'password', 'passwordConf', 'keyVal')

class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('questions', 'answers')
