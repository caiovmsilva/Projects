from django.contrib import admin
#import da class Car do arquivo models dentro da pasta cars
from cars.models import Car, Brand

class BrandAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

#classe própria do Django para a tabela Car
class CarAdmin(admin.ModelAdmin):
    #configurações herdadas de ModelAdmin
    list_display = ('model', 'brand', 'factory_year', 'model_year', 'value')
    #Para usar um obj do tipo ForeignKey  para busca, é preciso passar 
    #esse o campo da tabela correspondente (nesse caso brand) que vai ser usado
    #para a busca (nesse caso a chave primária 'name' de brand).
    #Isso é feito usando o ('__') entre o modelo relacionado e o campo buscado.
    search_fields = ('model','brand__name')

#Resgistra na tabela Car as configs de CarAdmin
admin.site.register(Car, CarAdmin)

#Registra na tabela Brand as configs de BrandAdmin
admin.site.register(Brand, BrandAdmin)