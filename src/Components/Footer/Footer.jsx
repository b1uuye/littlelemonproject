import React from 'react';
import './Footer.css';
import logo from '../../images/greenlogo.png';
import { Link} from 'react-scroll'


const Footer = () => {
  return (
    <div className="footer_container">
    <div className="footer_left">
        <Link
        to='header'
        span={1}
        smooth={true}
        duration={500}
        style={{cursor: 'pointer'}}>
        <img src={logo} alt="greenlogo" />
        </Link>
    </div>
    <div className="footer_right">
        <ul>
            <h3>Navigation</h3>
            <Link to='header' span={1} smooth={true} duration={500} style={{cursor: 'pointer'}}><li>Main Page</li></Link>
            <Link to='specials' span={1} smooth={true} duration={500} style={{cursor: 'pointer'}}><li>Highlights</li></Link>
            <Link to='reviews' span={1} smooth={true} duration={500} style={{cursor: 'pointer'}}><li>Reviews</li></Link>
            <Link to='about' span={1} smooth={true} duration={500} style={{cursor: 'pointer'}}><li>About</li></Link>
        </ul>
        <ul>
            <h3>Contacts</h3>
            <li><a href="https://www.google.co.uk/maps/place/Little+Lemon/@53.3414778,-6.2618191,17z/data=!3m1!4b1!4m6!3m5!1s0x48670f886b1dd297:0xf1b04af0735a4553!8m2!3d53.3414778!4d-6.2592442!16s%2Fg%2F11kjh5cxpm?entry=ttu">64 zoo lane</a></li>
            <li>01206 999999</li>
            <li>littlelemon@gmail.com</li>
        </ul>
        <ul>
            <h3>Social Media</h3>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://x.com/home">Twitter</a></li>
            <li><a href="https://github.com/b1uuye">Github</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Footer