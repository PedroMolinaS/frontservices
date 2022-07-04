import React, { useContext, useState } from 'react'
import AuthContext from '../../../../context/auth/authContext'
import ServicesContext from '../../../../context/services/servicesContext'
import Swal from 'sweetalert2'
import { deleteService, getAllServices } from '../../../../services/services'

const ServicesCard = ({ card }) => {

    const { globalAuthenticate, globalToken } = useContext(AuthContext)
    const { globalUpdateForm, globalUpdateAction, globalActualizarServicios } = useContext(ServicesContext)
    const [cargando, setCargando] = useState(false)

    const editar = () => {
        globalUpdateAction('Editar')
        globalUpdateForm({
            category: card.grupo,
            name: card.nombre,
            description: card.descripcion,
            idservice: card.idservicio
        })
    }
    const eliminar = () => {

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

    return (
        <>

            <div className="services__card">
                <div className="card__title">
                    {card.nombre}
                </div>
                <div className="card__text">
                    {card.descripcion}
                </div>
                <div className="card__footer">
                    {globalAuthenticate
                        ? <>
                            <p onClick={editar}>Editar</p>
                            <p onClick={eliminar}>Eliminar</p>
                        </>
                        : <p></p>
                    }
                </div>
            </div>
        </>
    )
}

export default ServicesCard