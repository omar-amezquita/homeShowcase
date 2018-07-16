from rest_framework import serializers
from homeService.models import Propiedad


class PropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propiedad
        fields = ('id', 'superficie', 'construccion', 'recamaras', 'banios', 'precio')
