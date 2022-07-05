import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import AuthContext from '../../context/auth/authContext'
import ServicesContext from '../../context/services/servicesContext'
import { deleteService, getAllServices } from '../../services/services'

const useCards = (card) => {

    const { globalToken } = useContext(AuthContext)
    const { globalUpdateForm, globalUpdateAction, globalActualizarServicios } = useContext(ServicesContext)
    const [cargando, setCargando] = useState(false)

    // ************************************************
    // SECCION DE CADA CARD: PARA EDITAR O ELIMINAR
    // ************************************************
    const editarCard = () => {
        globalUpdateAction('Editar')
        globalUpdateForm({
            category: card.grupo,
            name: card.nombre,
            description: card.descripcion,
            idservice: card.idservicio
        })
    }

    const eliminarCard = () => {

        Swal.fire({
            icon: 'question',
            title: 'Confirmar la eliminación',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Confirmar'
        }).then(rpta => {
            setCargando(true)
            if (rpta.isConfirmed) {
                // Eliminar registro
                try {
                    deleteService(globalToken, card.idservicio).then(rpta => {
                        setCargando(false)
                        if (rpta.ok) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Servicio eliminado'
                            })
                            // Luego de crar debo actualizo los servicios:
                            getAllServices().then(serv => {
                                globalActualizarServicios(serv)
                            })
                        }
                    })
                } catch (error) {
                    console.log(error)
                    setCargando(false)
                }
            }
        })
    }



    return { cargando, editarCard, eliminarCard }
}

export default useCards