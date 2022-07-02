import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

const AuthState = (props) => {

    const [state, dispatch] = useReducer(AuthReducer,{
        globalUser:{
            userName: '',
            perfil: ''
        },
        globalToken: '',
        globalAuthenticate: false
    })

    // =====================================
    // Zona de funciones:
    const globalIniciarSesion = () => {
        dispatch({
            type: 'INICIAR_SESION'
        })
    }

    return (
    <AuthContext.Provider value = {{
        globalUser: state.globalUser,
        globalToken: state.globalToken,
        globalAuthenticate: state.globalAuthenticate,
        globalIniciarSesion
    }}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState