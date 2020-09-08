from rest_framework import generics,permissions
from rest_framework.views import APIView


from ..serializers.Post import PostSerializer
from ..models import Post

class PostList(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-pub_date').all()

class PostRetrieve(generics.RetrieveAPIView):
    serializer_class = PostSerializer
    queryset =  Post.objects.all()

class PostUserOps(generics.RetrieveAPIView,generics.UpdateAPIView,generics.DestroyAPIView):
    serializer_class = PostSerializer
    queryset =  Post.objects.all()
