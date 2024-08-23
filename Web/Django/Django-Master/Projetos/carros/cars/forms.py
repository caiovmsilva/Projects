from django import forms
from cars.models import Brand, Car

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

    def save(self):
        car = Car(
            model = self.cleaned_data['model'],
            brand = self.cleaned_data['brand'],
            factory_year = self.cleaned_data['factory_year'],
            model_year = self.cleaned_data['model_year'],
            plate = self.cleaned_data['plate'],
            value = self.cleaned_data['value'],
            photo = self.cleaned_data['photo'],
        )
        car.save() #save do objeto car da tabela banco de dados, diferente do método acima.
        return car