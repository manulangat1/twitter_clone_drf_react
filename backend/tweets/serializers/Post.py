from rest_framework import serializers
from ..models import Post,Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = (
            'id',
            'tweet',
            'text',
            'pub_date'
        )

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post 
        fields = ('id','text','slug','pub_date')

class PostDetailSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField()
    class Meta:
        model = Post 
        fields = ('id','text','comments')
    def get_comments(self,obj):
        return CommentSerializer(obj.tweets.all(),many=True).data