from django.urls import path
from . import views

urlpatterns = [
    path('books/', views.get_books),
    path('add-book/', views.add_book),
    path('ask/', views.ask_book),
    path('summary/', views.summarize_book),
    path('recommend/', views.recommend),
]