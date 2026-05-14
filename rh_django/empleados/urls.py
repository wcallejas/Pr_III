from django.urls import path
from . import views

app_name = 'empleados'

urlpatterns = [
    # GET (listar todos) y POST (crear nuevo)
    path(
        '',
        views.EmpleadoListCreateView.as_view(),
        name='empleado-list-create'
    ),

    # GET (buscar por ID), PUT (actualizar), PATCH (actualizar parcial), DELETE (eliminar)

]