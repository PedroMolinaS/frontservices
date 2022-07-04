import React, { useContext, useState } from 'react'
import ServicesContext from '../../../context/services/servicesContext'

const HeaderCategoria = ({ categoria }) => {

    const { globalServiceSelected,globalLoadingServices, globalServices, globalFiltrarServicios } = useContext(ServicesContext)

    const filtrarServicios = () => {

        // Solo en el filtro principal asigno el arreglo original sin filtro
        globalLoadingServices(true)
        if (categoria === 'Todos') {
            globalFiltrarServicios({
                filtrado: globalServices, 
                categoria})
            return
        }

        const filtrado = globalServices.filter(s => s.grupo === categoria.toUpperCase())
        globalFiltrarServicios({filtrado, categoria})
    }

    return (
        <div
            className={`${globalServiceSelected===categoria ? 'active' : ''}`}
            onClick={filtrarServicios}
        >
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            {categoria}
            {/* <span className='banner_count'></span> */}
        </div>
    )
}

export default HeaderCategoria