from django.http.response import HttpResponse
from django.shortcuts import render,HttpResponse

# Create your views here.
def index(request):
    return render(request,'index.html')
# def about(request):
#     return HttpResponse('this is about you')  
def product(request):
    return render(request,'Product.html')     
def invoice(request):
    return render(request,'invoice.html')      
def Under_pro(request):
    return render(request,'Under_pro.html')       
def search_con(request):
    return render(request,'search_con.html')  
def contact_us(request):
    return render(request,'Contact_us.html')         
def about_main(request):
    return render(request,'about_main.html')        
def about_pro(request):
    return render(request,'about_pro.html')    
def about_invoice(request):
    return render(request,'about_invoice.html')                 