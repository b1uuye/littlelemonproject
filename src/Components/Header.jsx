import React from 'react'
import Logo from '../images/logosmall.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className='head-container'>
        <div className='head-left'>
            <img src={Logo} alt='logo'/>
        </div>
        <div className='head-right'>
            <ul className='nav_menu'>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reserve</li>
                <li>Order</li>
                <li>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default Header;