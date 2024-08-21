#from django.http import HttpResponse -> caso não houvesse tamplates
from django.shortcuts import render
from cars.models import Car
from cars.forms import CarForm

#render sempre pede request, por padrão
#esse request vem do usuário
def cars_view(request):
    #-model -> ordem inversa 
    cars = Car.objects.all().order_by('model')
    search = request.GET.get('search')
    
    if search:
        #icontains ignora upercase ou lowercase, considera tudo igualmente
        cars = Car.objects.filter(model__icontains=search)

    return render(
        request, 
        'cars.html', 
        #dados sendo passadaos para o template
        #esta seria a lista dos carros mostradas para o usuário
        {'cars': cars}
    )


def new_car_view(request):
    new_car_form = CarForm() #criando formulário vazio
    #renderiza para o usuário o arquivo new_car.html, passando para o template como variável
    #o formulário new_car_form vazio (criado acima)
    return render(request, 'new_car.html', { 'new_car_form': new_car_form })