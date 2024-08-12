#from django.http import HttpResponse -> caso não houvesse tamplates
from django.shortcuts import render
from cars.models import Car

#render sempre pede request, por padrão
#esse request vem do usuário
def cars_view(request):
    Car.objects.all() #equivalente a Select * From Cars
    
    return render(
        request, 
        'cars.html', 
        #dados sendo passadaos para o template
        #esta seria a lista dos carros mostradas para o usuário
        {'cars': {'model': 'Astra 2.0'}}
    )