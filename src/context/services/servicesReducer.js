
const ServicesReducer = (state, payload) => {

    switch (payload.action) {
        case 'COMPLETAR_SERVICIOS':
            return {
                ...state,
                globalServices: payload.data.servicios,
                globalServicesFiltered: payload.data.servicios,
                globalServiceTotal: {
                    total: payload.data.total
                },
                globalLoading: false
            }
        case 'FILTRAR_SERVICIOS':
            return {
                ...state,
                globalServicesFiltered: payload.data.filtrado,
                globalServiceSelected: payload.data.categoria,
                globalLoading: false                
            }
        case 'LOADING_SERVICES':
            return {
                ...state,
                globalLoading: payload.data
            }
        default:
            return state
    }

}

export default ServicesReducer