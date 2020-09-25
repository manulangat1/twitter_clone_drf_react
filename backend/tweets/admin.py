from django.contrib import admin
from .models import User,Post
# Register your models here.

class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("text",)}

admin.site.register(User)
admin.site.register(Post,PostAdmin)