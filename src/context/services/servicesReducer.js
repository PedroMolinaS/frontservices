
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
        case 'UPDATE_ACTION':
            return {
                ...state,
                globalAction: payload.data,
                globalForm: {
                    category: '',
                    name: '',
                    description: '',
                }
            }
        case 'UPDATE_FORM':
            return {
                ...state,
                globalForm: payload.data
            }
        default:
            return state
    }

}

export default ServicesReducer