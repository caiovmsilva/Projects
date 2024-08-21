from django import forms
from cars.models import Brand

#Cria uma classe de formularios que herda da classe django forms.Form
class CarForm(forms.Form):
    model = forms.CharField(max_length=200)

    #busca todas as marcas cadastradas no banco de dados
    #ModelChoiceField - mostra lista de opções (resultado da busca pela tab Brand)
    brand = forms.ModelChoiceField(Brand.objects.all())
    factory_year = forms.IntegerField()
    model_year = forms.IntegerField()
    plate = forms.CharField(max_length=10)
    value = forms.FloatField()
    photo = forms.ImageField()
