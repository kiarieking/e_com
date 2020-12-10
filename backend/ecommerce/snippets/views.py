# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import *
from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['GET'])
def taskList(request):
    tasks=Task.objects.all()
    serializer = Taskserializer(tasks, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def taskDetail(request, *args, **kwargs):
    task = get_object_or_404(Task, id=kwargs['id'])
    serializer = Taskserializer(task, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def task_create(request):
    serializer = Taskserializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)  

@api_view(['POST'])
def task_update(request, *args, **kwargs):
    task = get_object_or_404(Task, id=kwargs['id'])   
    serializer = Taskserializer(instance=task, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data) 