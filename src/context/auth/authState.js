import React, { useEffect, useReducer } from 'react'
import { getUser } from '../../services/auth'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

const AuthState = (props) => {

    const [state, dispatch] = useReducer(AuthReducer, {
        globalUser: {
            userName: '',
            email: ''
        },
        globalToken: '',
        globalNavigate: '',
        globalAuthenticate: false
    })

    // *************************************
    // Zona de funciones:
    // *************************************

    const globalIniciarSesion = (token, usuario) => {

        // Guardados token en caso de actualizar la web
        localStorage.setItem('token', token)

        dispatch({
            action: 'INICIAR_SESION',
            data: { token, usuario }
        })
    }

    const globalActivaSesion = (token) => {
        getUser(token).then(res => {
            dispatch({
                action: 'INICIAR_SESION',
                data: { token, usuario: res.usuario }
            })
        })
    }

    const globalCerrarSesion = () => {

        // Guardados token en caso de actualizar la web
        localStorage.removeItem('token')

        dispatch({
            action: 'CERRAR_SESION'
        })
    }


    // *************************************
    // Zona de Precarga:
    // *************************************

    useEffect(() => {

        const tok = localStorage.getItem('token')
        if (tok) globalActivaSesion(tok)

    }, [])



    return (
        <AuthContext.Provider value={{
            globalUser: state.globalUser,
            globalToken: state.globalToken,
            globalAuthenticate: state.globalAuthenticate,
            globalIniciarSesion,
            globalCerrarSesion
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState