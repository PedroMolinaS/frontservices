import { useContext, useState } from "react"
import AuthContext from "../../context/auth/authContext"
import ServicesContext from "../../context/services/servicesContext"
import { getAllServices, postService, putService } from "../../services/services"
import Swal from 'sweetalert2'

const useForm = () => {

    const { globalToken } = useContext(AuthContext)
    const { globalActualizarServicios, globalAction, globalUpdateAction, globalForm, globalUpdateForm } = useContext(ServicesContext)
    const [cargando, setCargando] = useState(false)


    const handleChange = (e) => {
        globalUpdateForm({
            ...globalForm,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = () => {
        globalUpdateAction('Crear')
    }

    // ***********************************************************
    // ENVIO DE REGISTROS DE ACTUALIZACION O CREACION DE SERVCIOS
    // ***********************************************************
    const handleSubmitForm = (e) => {
        e.preventDefault();

        // Validar datos completos del form:
        const { category, name, description } = globalForm
        if (category !== '' && name !== '' && description !== '') {
            let data = {
                grupo: category.toUpperCase(),
                nombre: name,
                descripcion: description
            }
            setCargando(true)

            if (globalAction === 'Editar') {
                // ****************************
                // Actualizando servicio:
                // ****************************
                putService(globalToken, globalForm.idservice, data).then(rpta => {
                    setCargando(false)

                    if (rpta && rpta?.ok) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Registro actualizado con éxtio',
                            timer: 2000,
                            timerProgressBar: true,
                        })
                        // Luego de crar debo actualizo los servicios:
                        getAllServices().then(serv => {
                            globalActualizarServicios(serv)
                            resetForm()
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error al actualizar',
                            timer: 2000,
                            timerProgressBar: true,
                        })
                    }
                }).catch(err => {
                    console.log(err)
                    setCargando(false)
                })
            } else {

                // ****************************
                // Creando servicio:
                // ****************************
                postService(globalToken, data).then(rpta => {
                    setCargando(false)

                    if (rpta && rpta?.ok) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Registro guardo con éxtio',
                            timer: 2000,
                            timerProgressBar: true,
                        })
                        // Luego de crar debo actualizo los servicios:
                        getAllServices().then(serv => {
                            globalActualizarServicios(serv)
                            resetForm()
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error al guardar',
                            text: 'Servicio ya existente',
                            timer: 2000,
                            timerProgressBar: true,
                        })
                    }
                }).catch(err => {
                    console.log(err)
                    setCargando(false)
                })
            }
        }
    }

    return { handleChange, handleSubmitForm, resetForm, cargando }
}

export default useForm