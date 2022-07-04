import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GeneralScreen from '../modules/general/screen/GeneralScreen'
import AuthScreen from '../modules/auth/screen/AuthScreen'
import HeaderScreen from '../modules/header/screens/HeaderScreen'

const RouterMain = () => {
  return (
    <>
      <HeaderScreen />
      <Routes>
        {/* <Route path='/customer' element={<RutaPrivada><GeneralCreateService /></RutaPrivada>} /> */}
        <Route path='/login' element={<AuthScreen />} />
        <Route path='/*' element={<GeneralScreen />} />
      </Routes>
    </>
  )
}

export default RouterMain