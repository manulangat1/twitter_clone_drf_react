from rest_framework import generics,permissions
from rest_framework.views import APIView
from rest_framework.response import Response


from ..serializers.Post import (
    PostSerializer, CommentSerializer,
    PostDetailSerializer, LikeSerializer, 
    TagSerializer )
from ..models import Post,Comment,Like,Tags


class TagList(generics.ListCreateAPIView):
    serializer_class = TagSerializer
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