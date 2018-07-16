from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from homeService.models import Propiedad
from homeService.serializers import PropiedadSerializer

def propiedades_list(request):
    if request.method == 'GET':
        propiedades = Propiedad.objects.all()
        serializer = PropiedadSerializer(propiedades, many=True)
        return JsonResponse(serializer.data, safe=False)
