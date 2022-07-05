import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GeneralScreen from '../modules/general/screen/GeneralScreen'
import HeaderScreen from '../modules/header/screens/HeaderScreen'

const RouterMain = () => {
  return (
    <>
      <HeaderScreen />
      <Routes>
        {/* Servicio de Login se dejo para FASE 2 */}
        {/* <Route path='/login' element={<AuthScreen />} /> */}
        <Route path='/*' element={<GeneralScreen />} />
      </Routes>
    </>
  )
}

export default RouterMain