import React from 'react';
import './Footer.css';
import logo from '../images/greenlogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer_container">
    <div className="footer_left">
        <img src={logo} alt="greenlogo" />
    </div>
    <div className="footer_right">
        <ul>
            <h3>Navigation</h3>
            <li>Main Page</li>
            <li>Highlights</li>
            <li>Reviews</li>
            <li>About</li>
        </ul>
        <ul>
            <h3>Contacts</h3>
            <li>64 zoo lane</li>
            <li>01206 999999</li>
            <li>littlelemon@gmail.com</li>
        </ul>
        <ul>
            <h3>Social Media</h3>
            <li>Main Page</li>
            <li>Highlights</li>
            <li>Github</li>
        </ul>
    </div>
    </div>
  )
}

export default Footer