import React, { useContext, useEffect } from 'react'
import ServicesContext from '../../../../context/services/servicesContext'
import { getAllServices } from '../../../../services/services'
import FallbackCards from '../../../helpers/FallbackCards'
import ServicesCard from '../components/ServicesCard'

const ServicesCards = ({setForm}) => {

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
                            <ServicesCard 
                                key={card.idservicio} 
                                card={card} 
                                setForm={setForm}
                            />
                        )
                    }))
                    : <FallbackCards />
            }
        </div>
    )
}

export default ServicesCards