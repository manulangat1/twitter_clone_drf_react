from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from .managers import CustomUserManager
from django.utils.text import slugify
# Create your models here.



class User(AbstractUser):
    username = None 
    tel_no = models.CharField(max_length=15)
    email = models.EmailField(_('email address'),unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()
    def __str__(self):
        return self.email


class Post(models.Model):
    author = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    text = models.TextField(max_length=260)
    slug = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField('Tags')

    def __str__(self):
        return self.text

    


class Comment(models.Model):
    tweet = models.ForeignKey(Post,on_delete=models.CASCADE,related_name="tweets")
    text = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.tweet.text


class Like(models.Model):
    tweet = models.ForeignKey(Post,on_delete=models.CASCADE,related_name="tweet_like")
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.tweet.text

class Tags(models.Model):
    name = models.CharField(max_length=50)
    posts = models.ManyToManyField('Post',related_name="tags_posta")

    def __str__(self):
        return self.name