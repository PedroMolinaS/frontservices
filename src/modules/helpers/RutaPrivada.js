import React, { useContext } from 'react'
import {Navigate} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const RutaPrivada = ({children}) => {

    const {globalAuthenticate} = useContext(AuthContext)

  return (
    <>
        {
        globalAuthenticate ? {children} : <Navigate to='/login' />
        }
    </>
  )
}

export default RutaPrivada