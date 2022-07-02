import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RutaPrivada from '../modules/helpers/RutaPrivada'
import GeneralCreateService from '../modules/general/screen/GeneralCreateService'
import CarsScreen from '../modules/cars/screens/CarsScreen'
import HealthScreen from '../modules/health/screens/HealthScreen'
import HomeScreen from '../modules/home/screens/HomeScreen'
import GeneralScreen from '../modules/general/screen/GeneralScreen'
import AuthScreen from '../modules/auth/screen/AuthScreen'
import HeaderScreen from '../modules/general/screen/HeaderScreen'

const RouterMain = () => {
  return (
    <>
      <HeaderScreen />
      <Routes>
        <Route path='/customer' element={<RutaPrivada><GeneralCreateService /></RutaPrivada>} />
        <Route path='/login' element={<AuthScreen />} />
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/health' element={<HealthScreen />} />
        <Route path='/cars' element={<CarsScreen />} />
        <Route path='/*' element={<GeneralScreen />} />
      </Routes>
    </>
  )
}

export default RouterMain