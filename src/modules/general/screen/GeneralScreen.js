import React from 'react'
import ServicesCards from '../../services/cards/components/ServicesCards'
import GeneralRegister from '../../services/management/screens/GeneralRegister'

const GeneralScreen = () => {
  return (
    <div className='services'>
      <ServicesCards />
      <GeneralRegister />
    </div>

  )
}

export default GeneralScreen