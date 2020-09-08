from rest_framework import serializers
from ..models import Post,Comment,Like,Tags


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = (
            'id',
            'tweet',
            'text',
            'pub_date'
        )


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = (
            'id',
            'name'
        )


class TagDetailSerializer(serializers.ModelSerializer):
    posts = serializers.SerializerMethodField()
    class Meta:
        model = Tags
        fields = (
            'id',
            'name',
            'posts'
        )
    def get_posts(self,obj):
        return PostDetailSerializer(obj.tags.all(),many=True).data

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = (
            'id',
            'tweet',
            'likes',
            'dislikes'
        )

class LikeDSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = (
            'id',
            # 'tweet',
            'likes',
            'dislikes'
        )

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post 
        fields = ('id','text','slug','pub_date')

class PostDetailSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField()
    likes = serializers.SerializerMethodField()
    tags = serializers.SerializerMethodField()
    class Meta:
        model = Post 
        fields = ('id','text','tags','comments','likes')
    def get_comments(self,obj):
        return CommentSerializer(obj.tweets.all(),many=True).data
    def get_likes(self,obj):
        return LikeDSerializer(obj.tweet_like.all(),many=True).data
    def get_tags(self,obj):
        return TagSerializer(obj.tags.all(),many=True).data

