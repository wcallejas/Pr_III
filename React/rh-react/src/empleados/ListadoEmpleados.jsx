import { useEffect, useState } from "react"
import axios from "axios"
import { NumericFormat } from "react-number-format"
import { urlBase } from "../constants"

function ListadoEmpleados(){
    const [empleados, setEmpleados] = useState([])
    const [error, setError] = useState(null)

    useEffect (() => {
        cargarEmpleados()
    }, [])

    const cargarEmpleados = async () => {
        try {
            const respuesta = await axios.get(urlBase)
            setEmpleados(respuesta.data)
        } catch (err) {
            setError('No se pudo conectar con el servidor, Verifica que el backend este corriendo...')
        }
    }
    if (error) {
        return <div className="alert alert-danger">{error}</div>
    }

    return (
        <div>
            <h2 className="mb-3">Listado de Empleados</h2>

            {empleados.length === 0 ? (
                <div className="alert alert-info">No hay empleados registrados.</div>
            ) : (
                <table className="table table-striped table-hover align middle">
                    <thead className="table-dark">
                        <tr>
                            <th>IdEmpleado</th>
                            <th>Nombre</th>
                            <th>Departamento</th>
                            <th>Sueldo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map((emp) => (
                            <tr key={emp.idEmpleado}>
                                <td>{emp.idEmpleado}</td>
                                <td>{emp.nombre}</td>
                                <td>{emp.departamento}</td>
                                <td>
                                    <NumericFormat
                                    value={emp.sueldo}
                                    displayType="text"
                                    thousandSeparator=","
                                    prefix="$"
                                    decimalScale={2}
                                    fixedDecimalScale
                                    />
                                </td>
                                <td>
                                <button className="btn btn-warning btn-sm me-2">Editar</button>
                                <button className="btn btn-danger btn-sm">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default ListadoEmpleados