import React, { useContext, useEffect } from 'react'
import ServicesContext from '../../../../context/services/servicesContext'
import { getAllServices } from '../../../../services/services'
import FallbackCards from '../../../helpers/FallbackCards'
import ServicesCard from '../screens/ServicesCard'

const ServicesCards = () => {

    const { globalServicesFiltered, globalActualizarServicios } = useContext(ServicesContext)

    const obtenerServicios = () => {
        getAllServices().then(serv => {
            globalActualizarServicios(serv)
        })
    }

    useEffect(() => {
        obtenerServicios()
    }, [])

    return (
        <div className="services__cards">
            {
                globalServicesFiltered.length > 0
                    ? globalServicesFiltered.map((card => {
                        return (
                            <ServicesCard key={card.idservicio} card={card} />
                        )
                    }))
                    : <FallbackCards />
            }
        </div>
    )
}

export default ServicesCards