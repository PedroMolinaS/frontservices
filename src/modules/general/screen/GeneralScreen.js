import React, { useState } from 'react'
import ServicesCards from '../../services/cards/screens/ServicesCards'
import GeneralRegister from '../../services/management/screens/GeneralRegister'

const GeneralScreen = () => {

  const [form, setForm] = useState({
    category: '',
    name: '',
    description: ''
  })
  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='services'>
      <ServicesCards setForm={setForm} />
      <GeneralRegister form={form} setForm={setForm} handleFormChange={handleFormChange} />
    </div>

  )
}

export default GeneralScreen