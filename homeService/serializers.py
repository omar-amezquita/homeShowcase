from rest_framework import serializers
from homeService.models import Propiedad


class PropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propiedad
        fields = (
                   'id',
                   'construccion',
                   'recamaras',
                   'banios',
                   'precio',
                   'foto',
                   'colonia',
                   'delegacion',
                   'noExterior',
                   'noInterior',
                   'calle',
                 )
