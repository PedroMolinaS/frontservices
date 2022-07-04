import React, { useContext, useState } from 'react'
import AuthContext from '../../../../context/auth/authContext'
import { postLogin } from '../../../../services/auth'
import SpinnerCuadrado from '../../../helpers/SpinnerCuadrado'
import Swal from 'sweetalert2'

const GeneralRegisterLogout = () => {

    const {globalIniciarSesion} = useContext(AuthContext)
    const [cargando, setCargando] = useState(false)

    const loguea = () => {
        setCargando(true)
        try {
            postLogin({
                correo: 'test@test.com',
                password: '123456'
            }).then(res => {
                setCargando(false)
                console.log({res})
                globalIniciarSesion(res.token, res.usuario)
                Swal.fire({
                    icon: 'success',
                    title: `Bienvenido ${res.usuario.nombre}`,
                    timer: 2500,
                    timerProgressBar: true,
                })
            })
        } catch (error) {            
            setCargando(false)
            Swal.fire({
                icon: 'error',
                title: 'Error al conectar',
                timer: 2500,
                timerProgressBar: true,
            })
        }
    }

    return (
        <>
            {cargando && <SpinnerCuadrado />}

            <div className="register__title">
                Servicio
            </div>
            <div className="register__iniciar">
                <button onClick={loguea}>Ingresar y registra servicios</button>
            </div>
        </>
    )
}

export default GeneralRegisterLogout