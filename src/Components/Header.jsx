import React from 'react'
import Logo from '../images/logosmall.jpg';
import './Header.css';
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='head-container' id='header'>
        <div className='head-left'>
          <Link to='/'>
            <img src={Logo} alt='logo'/>
            </Link>
        </div>
        <div className='head-right'>
            <ul className='nav_menu'>
                <LinkScroll to='hero' span={1} smooth={true} duration={500} style={{cursor: 'pointer'}}><li>Home</li></LinkScroll>
                <LinkScroll to='about' span={1} smooth={true} duration={500} style={{cursor: 'pointer'}}><li>About</li></LinkScroll>
                <LinkScroll to='specials' span={1} smooth={true} duration={500} style={{cursor: 'pointer'}}><li>Menu</li></LinkScroll>
                <li><Link to="/reserve" className='nav_menu_link'>Reserve</Link></li>
                <li>Order</li>
                <li>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default Header;