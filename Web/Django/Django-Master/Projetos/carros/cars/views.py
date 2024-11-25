#from django.http import HttpResponse -> caso não houvesse tamplates
from django.shortcuts import render, redirect
from cars.models import Car
from cars.forms import CarModelForm
from django.views import View

class CarsView(View):

    #render sempre pede request, por padrão
    #esse request vem do usuário
    def get(self, request):
        #-model -> ordem inversa 
        cars = Car.objects.all().order_by('model')
        search = request.GET.get('search')
        
        if search:
            #icontains ignora upercase ou lowercase, considera tudo igualmente
            cars = Car.objects.filter(model__icontains=search)

        return render(
            request, 
            'cars.html', 
            #dados sendo passados para o template
            #esta seria a lista dos carros mostradas para o usuário
            {'cars': cars}
        )



def new_car_view(request):
    if request.method == "POST":
        new_car_form = CarModelForm(request.POST, request.FILES) 
        #request.POST -> recebe todos os dados preenchidos pelo usuário
        #request.FILES -> recebe arquivos 
        if new_car_form.is_valid():
            new_car_form.save() # tá ligado a um modelo Car (não precisa criar um método save())
            return redirect('cars_list')
    else:
        new_car_form = CarModelForm() #criando formulário vazio
        #renderiza para o usuário o arquivo new_car.html, passando para o template como variável
        #o formulário new_car_form vazio (criado acima)

    return render(request, 'new_car.html', { 'new_car_form': new_car_form })    