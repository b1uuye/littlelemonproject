import React from 'react';
import './Hero.css';
import hero_img from '../images/breadplattersmall.jpg';

const Hero = () => {
  return (
   <div className='hero_container'>
    <div className='hero_left'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <br />
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
      <button className='reserve_btn'>Reserve a table</button>
    </div>
    <div className='hero_right'>
      <img src={hero_img} alt="heroimg" />
    </div>
   </div>
  )
}

export default Hero;