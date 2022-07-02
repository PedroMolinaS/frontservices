import React, { useContext } from 'react'
import AuthContext from '../../../context/auth/authContext'

const GeneralRegisterLogout = () => {

    const {globalIniciarSesion} = useContext(AuthContext)
    const loguea = () => {
        globalIniciarSesion()
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