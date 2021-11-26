from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path("",views.index,name='home'),
    path("index.html",views.index,name='home'),
    # path("about",views.about,name='about'),
    path("Product.html",views.product,name='product'),
    path("invoice.html",views.invoice,name='invoice'),
    path("Under_pro.html",views.Under_pro,name='Under_pro'),
    path("search_con.html",views.search_con,name='search_con'),
    path("Contact_us.html",views.contact_us,name='contact_us'),
    path("about_main.html",views.about_main,name='about_main'),
     path("about_pro.html",views.about_pro,name='about_pro'),
      path("about_invoice.html",views.about_invoice,name='about_invoice'),
]
