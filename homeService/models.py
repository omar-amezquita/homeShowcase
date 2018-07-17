from django.db import models


class Propiedad(models.Model):
    superficie = models.PositiveIntegerField()
    construccion = models.PositiveIntegerField()
    recamaras = models.PositiveIntegerField()
    banios = models.PositiveIntegerField()
    precio = models.PositiveIntegerField()
    foto = models.ImageField(upload_to='uploads/')

    #Direción
    calle = models.CharField(max_length=30)
    noExterior = models.CharField(max_length=30)
    noInterior = models.CharField(max_length=30, blank=True)
    colonia = models.CharField(max_length=30)
    delegacion = models.CharField(max_length=30)

    #Propiedades básicas
    fechaCreacion = models.DateTimeField(auto_now_add=True)
    habilitada = models.BooleanField(default=True)

    def __str__(self):
        return '{0} - {1}'.format(self.id, self.precio)

    class Meta:
        verbose_name_plural = "propiedades"
