import React, { useContext } from 'react'
import ServicesContext from '../../../context/services/servicesContext'
import '../../general/styles/general.css'
import HeaderCategoria from '../components/HeaderCategoria'

const HeaderScreen = () => {

  const { globalCategorias } = useContext(ServicesContext)

  return (
    <div className='banner__container'>
      {
        globalCategorias.map((cat, i) => {
          return (
            <HeaderCategoria key={i} categoria={cat} />
          )
        })
      }

    </div>
  )
}

export default HeaderScreen