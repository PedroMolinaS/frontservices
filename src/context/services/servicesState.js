import { useReducer } from "react"
import ServicesContext from "./servicesContext"
import ServicesReducer from "./servicesReducer"


const ServicesState = (props) => {

    const [state, dispatch] = useReducer(ServicesReducer, {
        globalServices: [],
        globalServicesFiltered: [],
        globalServiceTotal: {},
        globalServiceSelected: 'Todos',
        globalLoading: false,
        globalCategorias: ['Todos','Autos', 'Salud', 'Hogar']
    })

    // *************************************
    // Zona de funciones:
    // *************************************

    const globalActualizarServicios = (servicios) => {
        dispatch({
            action: 'COMPLETAR_SERVICIOS',
            data: servicios
        })
    }
    
    const globalFiltrarServicios = (servicios) => {
        dispatch({
            action: 'FILTRAR_SERVICIOS',
            data: servicios
        })
    }

    const globalLoadingServices = (stateLoading) => {
        dispatch({
            action: 'LOADING_SERVICES',
            data: stateLoading
        })
    }


    return (
        <ServicesContext.Provider value={{
            globalServices: state.globalServices,
            globalServicesFiltered: state.globalServicesFiltered,
            globalServiceSelected: state.globalServiceSelected,
            globalServiceTotal: state.globalServiceTotal,
            globalLoading: state.globalLoading,
            globalCategorias: state.globalCategorias,
            globalActualizarServicios,
            globalFiltrarServicios,
            globalLoadingServices
        }}>
            {props.children}
        </ServicesContext.Provider>
    )
}

export default ServicesState