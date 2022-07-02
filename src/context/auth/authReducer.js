
const AuthReducer = (state, action) => {
  
    switch (action.type) {
        case 'INICIAR_SESION':
            return {
                ...state,
                globalAuthenticate: true
            }            
    
        default:
            return state
    }
    
}

export default AuthReducer