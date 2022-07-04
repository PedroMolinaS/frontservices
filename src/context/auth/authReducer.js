
const AuthReducer = (state, payload) => {

    switch (payload.action) {
        case 'INICIAR_SESION':
            return {
                ...state,
                globalAuthenticate: true,
                globalUser: {
                    useName: payload.data.usuario.nombre,
                    email: payload.data.usuario.correo
                },
                globalToken: payload.data.token
            }
        case 'CERRAR_SESION':
            return {
                globalUser: {
                    userName: '',
                    email: ''
                },
                globalToken: '',
                globalNavigate: '',
                globalAuthenticate: false
            }

        default:
            return state
    }

}

export default AuthReducer