import React, { useState } from 'react'
import Logo from '../../images/logosmall.jpg';
import './Header.css';
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import burger from '../../images/more.png';
import Stilltomake from '../StillToMake/Stilltomake';


const Header = () => { //Header displayed on the top of every page. Allows for easy navigation and also smoothscroll to certain parts of screen
  const [isOpen,setIsOpen] = useState(false);

  const toggleMenu = () => {
  setIsOpen ((open) => !open);
  };

  return (
    <div className='head-container' id='header'>
        <div className='head-left'>
          <Link to='/'>
            <img src={Logo} alt='logo'/>
            </Link>
        </div>
        <div className='head-right'>
          <li className='menu_drop'><img src={burger} alt="menudrop" onClick={toggleMenu} /></li>
            <ul className={`nav_menu ${isOpen ? "is-open" : ''}`}>
                <LinkScroll to='hero' span={1} smooth={true} duration={500} style={{cursor: 'pointer'}}><li>Home</li></LinkScroll>
                <LinkScroll to='about' span={1} smooth={true} duration={500} style={{cursor: 'pointer'}}><li>About</li></LinkScroll>
                <LinkScroll to='specials' span={1} smooth={true} duration={500} style={{cursor: 'pointer'}}><li>Menu</li></LinkScroll>
                <li><Link to="/reserve" className='nav_menu_link'>Reserve</Link></li>
                <li><Link to="/under-construction" className='nav_menu_link'>Order</Link></li>
                <li><Link to="/under-construction" className='nav_menu_link'>Login</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;