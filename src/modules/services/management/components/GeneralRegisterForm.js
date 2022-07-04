import React, { useContext, useState } from 'react'
import AuthContext from '../../../../context/auth/authContext'
import ServicesContext from '../../../../context/services/servicesContext'
import { getAllServices, postService } from '../../../../services/services'
import Swal from 'sweetalert2'
import SpinnerCuadrado from '../../../helpers/SpinnerCuadrado'

const GeneralRegisterForm = () => {

    const { globalToken } = useContext(AuthContext)
    const { globalCategorias, globalActualizarServicios } = useContext(ServicesContext)
    const [cargando, setCargando] = useState(false)

    const [form, setForm] = useState({
        category: '',
        name: '',
        description: ''
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        // Validar form:
        const { category, name, description } = form
        if (category !== '' && name !== '' && description !== '') {
            let data = {
                grupo: category.toUpperCase(),
                nombre: name,
                descripcion: description
            }
            setCargando(true)
            try {
                postService(globalToken, data).then(([rpta, status]) => {
                    setCargando(false)

                    if (status<300 && rpta && rpta?.ok) {

                        Swal.fire({
                            icon: 'success',
                            title: 'Registro guardo con éxtio',
                            timer: 2000,
                            timerProgressBar: true,
                        })
                        // Actualizo los servicios:
                        getAllServices().then(serv => {
                            globalActualizarServicios(serv)
                            resetForm()
                        })
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Error al guardar',
                            timer: 2000,
                            timerProgressBar: true,
                        })
                    }
                })
            } catch (error) {
                console.log(error)
                setCargando(false)

            }
        }

    }

    const resetForm = () => {
        setForm({
            category: '',
            name: '',
            description: '',
        })
        // globalCerrarSesion(globalToken)
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
                                value={form.category}
                                onChange={handleChange}
                            >
                                <option value='Seleccionar'>Seleccionar</option>
                                {globalCategorias.filter(c => c !== 'Todos').map(cat => {
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
                                value={form.name}
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
                                value={form.description}
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