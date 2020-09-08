from django.urls import path

from ..api.Post import PostList,PostRetrieve,PostUserOps

urlpatterns = [
    path('',PostList.as_view()),
    path('post/<slug>/',PostRetrieve.as_view()),
    path('post/user/<pk>/',PostUserOps.as_view())
]