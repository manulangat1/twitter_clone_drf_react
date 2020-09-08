from django.db import models

# Create your models here.


class Post(models.Model):
    text = models.TextField(max_length=260)
    slug = models.TextField(default="Hey")
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text
