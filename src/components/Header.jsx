import React from 'react'
import moon from '../images/icon-moon.svg'


const Header = () => {

  return (
    <header className='header'>
        <div className='contenedor flex justify-between items-center  '>
            <h1 className='text-white font-bold tracking-widest text-5xl mt-16 mb-20 '>T O D O</h1>
            <img src={moon} alt="icon moon" className='mt-16 mb-20' />
        </div>
       
    </header>
  )
}

export default Header
