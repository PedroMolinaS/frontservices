import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/general.css'

const HeaderScreen = () => {
  return (
    <div className='banner__container'>
      <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>
      <i className="fa-solid fa-magnifying-glass"></i>Todos
      </NavLink>
      <NavLink to='/cars' className={({ isActive }) => isActive ? 'active' : ''}>
      <i className="fa-solid fa-car"></i>Autos
      </NavLink>
      <NavLink to='/health' className={({ isActive }) => isActive ? 'active' : ''}>
      <i className="fa-solid fa-heart-pulse"></i>Salud
      </NavLink>
      <NavLink to='/home' className={({ isActive }) => isActive ? 'active' : ''}>
      <i className="fa-solid fa-house-chimney-user"></i>Hogar
      </NavLink>

    </div>
  )
}

export default HeaderScreen