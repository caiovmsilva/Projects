from django import forms
from cars.models import Brand, Car


class CarModelForm(forms.ModelForm):
    
    class Meta: 
        model = Car        # liga diretamente o modelo Car ao form, o que agiliza a criação de novos campos
        fields = '__all__' # quero todos os campos da tabela car