import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthState from './context/auth/authState'
import RouterMain from './routers/RouterMain'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthState>
          <RouterMain />
        </AuthState>
      </BrowserRouter>
    </div>
  )
}

export default App