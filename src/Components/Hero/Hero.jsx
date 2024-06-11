import React from 'react';
import './Hero.css';
import hero_img from '../../images/breadplattersmall.jpg';
import { Link } from 'react-router-dom';

const Hero = () => { //main page that people are greeted with once they load the page. This sits just below the header
  return (
   <div className='hero_container' id='hero'>
    <div className='hero_left'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <br />
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
      <button className='reserve_btn'><Link to='/reserve' className='reserve_btn_link'>Reserve a table</Link></button>
    </div>
    <div className='hero_right'>
      <img src={hero_img} alt="heroimg" />
    </div>
   </div>
  )
}

export default Hero;