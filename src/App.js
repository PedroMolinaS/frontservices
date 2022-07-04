import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthState from './context/auth/authState'
import ServicesState from './context/services/servicesState'
import RouterMain from './routers/RouterMain'
import './styles/index.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthState>
          <ServicesState>
            <RouterMain />
          </ServicesState>
        </AuthState>
      </BrowserRouter>
    </div>
  )
}

export default App