import React, { useContext, useState } from 'react'
import AuthContext from '../../../../context/auth/authContext'
import ServicesContext from '../../../../context/services/servicesContext'
import { getAllServices, postService, putService } from '../../../../services/services'
import Swal from 'sweetalert2'
import SpinnerCuadrado from '../../../helpers/SpinnerCuadrado'

const GeneralRegisterForm = () => {

    const { globalToken } = useContext(AuthContext)
    const { globalCategorias, globalActualizarServicios, globalAction, globalUpdateAction, globalForm, globalUpdateForm } = useContext(ServicesContext)
    const [cargando, setCargando] = useState(false)
    

    const handleChange = (e) => {
        globalUpdateForm({
            ...globalForm,
            [e.target.name]: e.target.value
        })
    }

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
            try {
                // Valido si va crear o actualizar:
                if (globalAction === 'Editar') {
                    putService(globalToken, globalForm.idservice, data).then(([rpta, status]) => {
                        setCargando(false)

                        if (status < 300 && rpta && rpta?.ok) {
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
                    })
                } else {
                    // Creando:
                    postService(globalToken, data).then(([rpta, status]) => {
                        setCargando(false)

                        if (status < 300 && rpta && rpta?.ok) {
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
                                timer: 2000,
                                timerProgressBar: true,
                            })
                        }
                    })
                }
            } catch (error) {
                console.log(error)
                setCargando(false)
            }
        }

    }

    const resetForm = () => {
        globalUpdateAction('Crear')
    }

    return (
        <>
            {
                cargando && <SpinnerCuadrado />
            }
            <form className="register__form" onSubmit={handleSubmitForm}>
                <div className="register__body">
                    <div className="register__group">
                        <label>
                            <p> Categoria:</p>
                            <select
                                name="category"
                                value={globalForm.category}
                                onChange={handleChange}
                            >
                                <option value='Seleccionar'>Seleccionar</option>
                                {globalCategorias.filter(c => c !== 'TODOS').map(cat => {
                                    return (
                                        <option key={cat} value={cat}
                                        >{cat}</option>
                                    );
                                })}
                            </select>
                        </label>
                    </div>
                    <div className="register__group">
                        <label>
                            <p>Nombre:</p>
                            <input
                                type="text"
                                placeholder="Nombre"
                                name='name'
                                onChange={handleChange}
                                value={globalForm.name}
                            />
                        </label>
                    </div>
                    <div className="register__group">
                        <label>
                            <p>Descripción:</p>
                            <input
                                type="text"
                                placeholder="Descripción"
                                name='description'
                                onChange={handleChange}
                                value={globalForm.description}
                            />
                        </label>
                    </div>
                </div>
                <div className="register__footer">
                    <button type='Submit'>Grabar</button>
                    <button onClick={resetForm}>Cancelar</button>
                </div>

            </form>
        </>
    )
}

export default GeneralRegisterForm