from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.



class User(AbstractUser):
    tel_no = models.CharField(max_length=15)

    def __str__(self):
        return self.username


class Post(models.Model):
    text = models.TextField(max_length=260)
    slug = models.TextField(default="Hey")
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