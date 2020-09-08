from rest_framework import generics,permissions
from rest_framework.views import APIView


from ..serializers.Post import PostSerializer,CommentSerializer,PostDetailSerializer,LikeSerializer
from ..models import Post,Comment,Like


class LikeList(generics.ListCreateAPIView):
    serializer_class = LikeSerializer
    queryset = Like.objects.all()

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