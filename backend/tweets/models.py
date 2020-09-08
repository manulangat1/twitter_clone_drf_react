from django.db import models

# Create your models here.


class Post(models.Model):
    text = models.TextField(max_length=260)
    slug = models.TextField(default="Hey")
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text

    


class Comment(models.Model):
    tweet = models.ForeignKey(Post,on_delete=models.CASCADE,related_name="tweets")
    text = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.tweet.text


class Like(models.Model):
    tweet = models.ForeignKey(Post,on_delete=models.CASCADE,related_name="tweets_like")
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.tweet.text
