import React, { useContext } from 'react'
import AuthContext from '../../../context/auth/authContext'
import ServicesContext from '../../../context/services/servicesContext'
import '../../general/styles/general.css'
import HeaderCategoria from '../components/HeaderCategoria'

const HeaderScreen = () => {

  const { globalUser, globalCerrarSesion, globalAuthenticate } = useContext(AuthContext)
  const { globalCategorias } = useContext(ServicesContext)

  return (
    <div className='banner__principal'>
      <div className='banner__container'>
        {
          globalCategorias.map((cat, i) => {
            return (
              <HeaderCategoria key={i} categoria={cat} />
            )
          })
        }
      </div>
      {
        globalAuthenticate &&
        <div className='banner__user'>
          <div>¡Hola: {globalUser?.useName}</div>
          <div className='cerrarsesion' onClick={globalCerrarSesion}>Cerrar Sesión</div>
        </div>
      }

    </div>
  )
}

export default HeaderScreen