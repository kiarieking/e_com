from django.urls import path
from .views import *

urlpatterns = [
    path('task-list', taskList, name='task-list'),
    path('task-detail/<int:id>', taskDetail, name='task-detail'),
    path('task-create/', task_create, name='task-detail'),
    path('task-update/<int:id>', task_update, name='task-update')
]