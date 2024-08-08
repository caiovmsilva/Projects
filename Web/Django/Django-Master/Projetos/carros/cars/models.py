from django.db import models

#models.Model é uma herança da classe Model 

class Car(models.Model):
    #AutoField: incrementação automática
    id = models.AutoField(primary_key=True)
    #blank ou null: posso deixar em branco
    model = models.CharField(max_length=200)
    brand = models.CharField(max_length=200)
    factory_year = models.IntegerField(blank=True, null=True)
    model_year = models.IntegerField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)