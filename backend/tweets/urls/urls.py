from django.urls import path

from ..api.Post import (
    PostList, PostRetrieve,
    PostUserOps, CommentList,
    CommentRetrieve, LikeList,
    LikeCreate, TagList, 
    RegisterAPI, LoginAPI, 
    UserAPI
    )

urlpatterns = [
    path('',PostList.as_view(),name="post_list"),
    path('register/',RegisterAPI.as_view(),name='registration'),
    path('login/',LoginAPI.as_view(),name='login'),
    path('user/',UserAPI.as_view(),name='user'),
    path('post/<slug>/',PostRetrieve.as_view(),name='post_retrieve'),
    path('post/user/<pk>/',PostUserOps.as_view()),
    path('comment/',CommentList.as_view()),
    path('comment/<pk>/',CommentRetrieve.as_view()),
    path('like/',LikeList.as_view()),
    path('like/create/',LikeCreate.as_view()),
    path('tag/',TagList.as_view())
]