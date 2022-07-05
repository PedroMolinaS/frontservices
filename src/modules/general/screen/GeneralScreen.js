import React, { Suspense } from 'react'
import FallbackCards from '../../helpers/FallbackCards'
import GeneralRegister from '../../services/management/screens/GeneralRegister'

const ServicesCards = React.lazy(() => import('../../services/cards/screens/ServicesCards'))

const GeneralScreen = () => {

  // ****************************************************************
  // PARA LA CARGA INICIAL DE LA WEB: Se utilizó React Lazy
  // Para visualizar la carga de la web al inicio y no al final
  // ****************************************************************

  return (
    <div className='services'>
      <Suspense fallback={<FallbackCards />}>
        <ServicesCards />
        <GeneralRegister />
      </Suspense>
    </div>

  )
}

export default GeneralScreen