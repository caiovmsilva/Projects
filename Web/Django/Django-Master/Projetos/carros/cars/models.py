from django.db import models

#models.Model é uma herança da classe Model 

class Brand(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Car(models.Model):
    #AutoField: incrementação automática
    id = models.AutoField(primary_key=True)
    #blank ou null: posso deixar em branco
    model = models.CharField(max_length=200)

    #brand é chave estrangeira em Car referenciando a tabela Brand
    #models.PROTECT - não permite deletar a brand
    #related_name - relação entre a tabela Car e Brand
    brand = models.ForeignKey(Brand, on_delete=models.PROTECT, related_name='car_brand')
    factory_year = models.IntegerField(blank=True, null=True)
    model_year = models.IntegerField(blank=True, null=True)
    plate = models.CharField(max_length=10, blank=True, null=True)
    value = models.FloatField(blank=True, null=True)
    
    #Django usa a bib Pillow pra ter a dependência ImageField
    photo = models.ImageField(upload_to='cars/', blank=True, null=True)

    #Função padrão de Model -> substituir padrão pelo nome do model
    #Ao invés de ser car object(...), fica o nome do modelo do carro
    def __str__(self):
        return self.model