#from django.http import HttpResponse -> caso não houvesse tamplates
from django.shortcuts import render
from cars.models import Car

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