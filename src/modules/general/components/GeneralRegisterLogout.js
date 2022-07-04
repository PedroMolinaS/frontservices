import React, { useContext } from 'react'
import AuthContext from '../../../context/auth/authContext'
import { postLogin } from '../../../services/auth'

const GeneralRegisterLogout = () => {

    const {globalIniciarSesion} = useContext(AuthContext)
    const loguea = () => {

        postLogin({
            correo: 'test@test.com',
            password: '123456'
        }).then(res => {
            console.log({res})
            globalIniciarSesion()
        })
    }

    return (
        <>
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