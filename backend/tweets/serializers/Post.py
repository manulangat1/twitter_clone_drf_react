from rest_framework import serializers
from ..models import Post,Comment,Like,Tags
from django.contrib.auth import authenticate
from ..models import User

# User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = (
            'id',
            'email',
            'password',
            'tel_no'
        )
    extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['email'],validated_data['password'])
        user.tel_no = validated_data['tel_no']
        user.is_active = False
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user 
        return serializers.ValidationError("Incorrect Credentials sorry")


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = (
            'id',
            'username',
            'email',
            'tel_no',
        )

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
    post = serializers.SerializerMethodField()
    class Meta:
        model = Tags
        fields = (
            'id',
            'name',
            'post'
        )
    def get_post(self,obj):
        # print(obj)
        return PostSerializer(obj.tags_posta.all(),many=True).data

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

