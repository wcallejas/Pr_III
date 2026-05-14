from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Empleado
from .serializers import EmpleadoSerializer

# Create your views here.
class EmpleadoListCreateView(generics.ListCreateAPIView):
    """
    Vista para manejar la colección de empleados
    GET /api/empleados/     -> Lista todos los empleados
    POST /api/empleados/    -> Crear un nuevo empleado
    """
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

    def create(self, request, *args, **kwargs):
        """ Sobreescritura create() para devolver un mensaje 201"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                'mensaje': 'Empleado Creado con exito!',
                'empleado': serializer.data
            },
            status=status.HTTP_201_CREATED
        )
    class EmpleadoDetailView(generics.RetrieveUpdateDestroyAPIView):
        """Vista para manejar un empleado de manera individual
        GET /api/empleados/ -> Lista todos los empleados
        GET /api/empleados/{id} -> Retorna un empleado por ID
        PUT /api/empleados/{id} -> Actualiza todos los campos de un empleado
        PATCH /api/empleados/{id} -> Actualizar campos de manera parcial
        DELETE /api/empleados/{id} -> Eliminar un empleado
        """
        queryset = Empleado.objects.all()
        serializer_class = EmpleadoSerializer
        lookup_field = 'idEmpleado'     #Se debe usar la PK de la base de datos

        def update(self, request, *args, **kwargs):
            """Sobreescribimos update() para manejar PUT y PATCH"""
            partial = kwargs.pop('partial', False)
            instance = self.get_object()
            serializer = self.get_serializer(instance, data=request.data, partial=partial)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
            return Response(
                {
                    'mensaje': 'Empleado actualizado con exito!',
                    'empleado': serializer.data
                },
                status=status.HTTP_200_OK
            )

        def destroy(self, request, *args, **kwargs):
            """Sobreescribimos destroy() para manejar DELETE"""
            instance = self.get_object()
            nombre = instance.nombre
            self.perform_destroy(instance)
            return Response(
                {'mensaje': f'Empleado "{nombre}" eliminado de manera exitosa'},
                status=status.HTTP_200_OK
            )
