#from django.http import HttpResponse -> caso não houvesse tamplates
from django.shortcuts import render
from cars.models import Car

#render sempre pede request, por padrão
#esse request vem do usuário
def cars_view(request):
    #cars = Car.objects.all() #equivalente a Select * From Cars
    #busca qualquer model que contenha a string 'Chevette'
    #Essa busca não é case sensitive, mas caracteres especiais devem estar presentes
    cars = Car.objects.filter(model__contains='Chevette')

    return render(
        request, 
        'cars.html', 
        #dados sendo passadaos para o template
        #esta seria a lista dos carros mostradas para o usuário
        {'cars': cars}
    )