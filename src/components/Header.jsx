import React from 'react'
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'

const Header = ({setDarkModeActivo, darkModeActivo}) => {

  const darkMode = () => {
    console.log('activaste modo oscuro');
    setDarkModeActivo(!darkModeActivo)
  }

  return (
    <header className={darkModeActivo ? 'header-dark': 'header'}>
        <div className='contenedor flex justify-between items-center   '>
            <h1 className='text-white font-bold tracking-widest text-5xl mt-16 mb-20 md:text-7xl '>T O D O</h1>
           
            {darkModeActivo ? (
              <img src={sun} alt="icon sun" className='cursor-pointer mt-16 mb-20' onClick={darkMode} />
            ): (
              <img src={moon} alt="icon moon" className='cursor-pointer mt-16 mb-20' onClick={darkMode} />
            )}
        </div>
       
    </header>
  )
}

export default Header
