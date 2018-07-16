from django.db import models


class Propiedad(models.Model):
    superficie = models.PositiveIntegerField()
    construccion = models.PositiveIntegerField()
    recamaras = models.PositiveIntegerField()
    banios = models.PositiveIntegerField()
    precio = models.PositiveIntegerField()

    #Propiedades básicas
    fechaCreacion = models.DateTimeField(auto_now_add=True)
    habilitada = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "propiedades"
