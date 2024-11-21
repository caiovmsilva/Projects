from django import forms
from cars.models import Brand, Car


class CarModelForm(forms.ModelForm):
    
    class Meta: 
        model = Car        # liga diretamente o modelo Car ao form, o que agiliza a criação de novos campos
        fields = '__all__' # quero todos os campos da tabela car

    def clean_value(self):  # 'clean_' == função de validação de campo
        value = self.cleaned_data.get('value')
        # self é uma instância do Form  
        # cleaned_data retorna os dados limpos e validados
        # .get('value') recupera o campo 'value'

        if value < 20000:
            self.add_error('value', "Valor mínimo do carro deve ser de R$20.000")
            # adiciona erro no Form (representado pelo self aqui)
        return value