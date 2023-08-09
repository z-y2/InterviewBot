from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer, LoginSerializer, RegisterSerializer, ChatSerializer
from .models import Todo, Login, Register, Chat

# Create your views here.
class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


class LoginView(viewsets.ModelViewSet):
    serializer_class = LoginSerializer
    queryset = Login.objects.all()

class RegisterView(viewsets.ModelViewSet):
    serializer_class = RegisterSerializer
    queryset = Register.objects.all()

class ChatView(viewsets.ModelViewSet):
    serializer_class = ChatSerializer
    queryset = Chat.objects.all()
    