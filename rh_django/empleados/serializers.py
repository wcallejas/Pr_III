from rest_framework import serializers
from empleados.models import Empleado

from rest_framework import serializers
from .models import Empleado

class EmpleadoSerializer(serializers.ModelSerializer):
    """Serializer para el modelo Empleado
    Se encarga de:
    1. Convertir objetos de Empleado a JSON(Para respuestas  al cliente)
    2. Convertir a JSON a objetos Empleado (para guardar en la BD)
    3. Validar los datos recibidos del cliente
    """

    class Meta:
        model = Empleado
        fields = ['idEmpleado', 'nombre', 'departamento', 'sueldo']
        read_only_fields = ['idEmpleado']   #El id lo relaciona la base de datos de manera automatica

    #Validación del campo nombre
    def validate_nombre(self, value):
        """El nombre no puede ser una cadena vacia o solo espacios"""
        value = value.strip()
        if not value:
            raise serializers.ValidationError('El nombre no puede ser vacio ni contener solo espacios')
        if len(value) < 2:
            raise serializers.ValidationError('eL nombre debe tener al menos 2 caracteres.')
        return value

    #Validación del campo departamento
    def validate_departamento(self, value):
        """El departamento no puede ser una cadena vacia o solo espacios"""
        value = value.strip()
        if not value:
            raise serializers.ValidationError('El departamento no puede estar vacio ni contener solo espacios.')
        return value

    #Validación del campo de sueldo
    def validate_sueldo(self, value):
        """El sueldo debe ser un número positivo mayor que cero"""
        if value <= 0:
            raise serializers.ValidationError('El sueldo debe ser mayor que cero.')
        return value
