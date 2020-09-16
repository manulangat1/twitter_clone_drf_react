from rest_framework import generics,permissions
from rest_framework.views import APIView
from rest_framework.response import Response


from knox.models import AuthToken

from ..serializers.Post import (
    PostSerializer, CommentSerializer,
    PostDetailSerializer, LikeSerializer, 
    TagSerializer, TagDetailSerializer , 
    RegisterSerializer, UserSerializer ,
    LoginSerializer
    )
from ..models import Post,Comment,Like,Tags


from django.contrib.auth import get_user_model

User = get_user_model()

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self,request,*args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user,context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user)[1]
        })
#user api

class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self,request,*args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data
        })


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer
    def get_object(self):
        return self.request.user

class TagCreate(generics.CreateAPIView):
    serializer_class = TagSerializer
    queryset = Tags.objects.all()

class TagList(generics.ListAPIView):
    serializer_class = TagDetailSerializer
    queryset = Tags.objects.all()


class LikeList(generics.ListAPIView):
    serializer_class = LikeSerializer
    queryset = Like.objects.all()

class LikeCreate(APIView):
    def post(self,request):
        post = request.data['tweet']
        comment =  Like.objects.filter(tweet=post)
        posts = Post.objects.filter(id=post)
        print(comment)
        
        if posts.exists():
            print(posts[0])
            if comment.exists() and len(comment)> 0:
                print("hey")
                # comment.likes +=  1 
                cmt = comment[0]
                cmt.likes += 1
                cmt.save()

            else:
                comment = Like(tweet=posts)
                comment.likes = 1 
                comment.dislikes = 1 
                comment.save()
            return Response("Done")
        else:
            return Response("Hey")


class PostList(generics.ListCreateAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-pub_date').all()

    def perform_create(self, serializer):

        return serializer.save(slug=self.request.data['text'])

class PostRetrieve(generics.RetrieveAPIView):
    serializer_class = PostDetailSerializer
    queryset =  Post.objects.all()
    lookup_field = ('slug')
class PostUserOps(generics.RetrieveAPIView,generics.UpdateAPIView,generics.DestroyAPIView):
    serializer_class = PostSerializer
    queryset =  Post.objects.all()


class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentRetrieve(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer