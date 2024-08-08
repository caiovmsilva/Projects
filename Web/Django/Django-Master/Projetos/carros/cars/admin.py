from django.contrib import admin
#import da class Car do arquivo models dentro da pasta cars
from cars.models import Car

#classe própria do Django para a tabela Car
class CarAdmin(admin.ModelAdmin):
    #configurações herdadas de ModelAdmin
    list_display = ('model', 'brand', 'factory_year', 'model_year', 'value')
    search_fields = ('model', 'brand')

#Resgistra na tabela Car as configs de CarAdmin
admin.site.register(Car, CarAdmin)