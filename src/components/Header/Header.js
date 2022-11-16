import React from 'react'
import Logo from '../../assets/header/logo.svg'
import BMenu from '../../assets/header/burger-menu.svg'

const Header = () => {
  return (
    <section className='header'>
        <div className='container'>
          <div className='header-icons'>
            <img src={Logo} alt=''/>
            <img src={BMenu} alt=''/>
          </div>
          <div className='web'>
            <h4 className='web-title'>web applications</h4>
            <p className='web-subtitle'>Повседневная практика.</p>
            <button className='web-btn' type='button'>Спец предложение</button>
          </div>
        </div>
    </section>
  )
}

export default Header