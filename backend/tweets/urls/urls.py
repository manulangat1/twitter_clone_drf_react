from django.urls import path

from ..api.Post import PostList,PostRetrieve,PostUserOps,CommentList,CommentRetrieve,LikeList,LikeCreate

urlpatterns = [
    path('',PostList.as_view()),
    path('post/<slug>/',PostRetrieve.as_view()),
    path('post/user/<pk>/',PostUserOps.as_view()),
    path('comment/',CommentList.as_view()),
    path('comment/<pk>/',CommentRetrieve.as_view()),
    path('like/',LikeList.as_view()),
    path('like/create/',LikeCreate.as_view())
]