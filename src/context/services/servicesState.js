import { useReducer } from "react"
import ServicesContext from "./servicesContext"
import ServicesReducer from "./servicesReducer"


const ServicesState = (props) => {

    const [state, dispatch] = useReducer(ServicesReducer, {
        globalServices: [],
        globalServicesFiltered: [],
        globalServiceTotal: {},
        globalServiceSelected: 'TODOS',
        globalLoading: false,
        globalAction: 'Crear',
        globalCategorias: ['TODOS','AUTOS', 'SALUD', 'HOGAR']
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

    const globalUpdateAction = (action) => {
        dispatch({
            action: 'UPDATE_ACTION',
            data: action
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
            globalAction: state.globalAction,
            globalActualizarServicios,
            globalFiltrarServicios,
            globalLoadingServices,
            globalUpdateAction
        }}>
            {props.children}
        </ServicesContext.Provider>
    )
}

export default ServicesState