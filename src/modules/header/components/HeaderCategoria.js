import React, { useContext } from 'react'
import ServicesContext from '../../../context/services/servicesContext'

const HeaderCategoria = ({ categoria }) => {

    const { globalServiceSelected,globalLoadingServices, globalServices, globalFiltrarServicios } = useContext(ServicesContext)

    const filtrarServicios = () => {

        // Solo en el filtro principal asigno el arreglo original sin filtro
        globalLoadingServices(true)
        if (categoria === 'TODOS') {
            globalFiltrarServicios({
                filtrado: globalServices, 
                categoria})
            return
        }

        // En caso haga click en una seccion, filtro los datos y actualizo el arreglo seleccionado
        const filtrado = globalServices.filter(s => s.grupo === categoria.toUpperCase())
        globalFiltrarServicios({filtrado, categoria})
    }

    return (
        <div
            className={`${globalServiceSelected===categoria ? 'active' : ''}`}
            onClick={filtrarServicios}
        >{categoria}
        </div>
    )
}

export default HeaderCategoria