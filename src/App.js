import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthState from './context/auth/authState'
import ServicesState from './context/services/servicesState'
import RouterMain from './routers/RouterMain'
import './styles/index.css'

const App = () => {

  // LAS RUTAS ENVUELVEN TODO EL PROYECTO

  // Para variables globales se utilizó el CONTEXT:
  // Tenemos CONTEXT de USUARIO y se SEVICIO, siendo el 1ro de mayor nive debido al Login

  return (
    <div>
      <BrowserRouter>
        <AuthState>
          <ServicesState>

            {/* Se utilizó RUTAS DE RouterDOM */}
            <RouterMain />

          </ServicesState>
        </AuthState>
      </BrowserRouter>
    </div>
  )
}

export default App