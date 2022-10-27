from django.contrib import admin
from .models import Article

# Register your models here.
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('title', 'description')
    