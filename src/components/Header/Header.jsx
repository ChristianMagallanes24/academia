import React from 'react'
import hero from '../../assets/hero.jpeg'
const Header = () => {
  return (
    <div className='header'>
    <div className="info-header">
        <h1 className='titulo'>bienvenidos a la academia</h1>
        <p className='header-p'>quieres saber mas sobre nosotros?</p>
        <a className='header-btn' href="#">saber mas</a>
    </div>
    </div>
  )
}

export default Header