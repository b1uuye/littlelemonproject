import React from 'react';
import './About.css';
import fishpot from '../../images/fishpot.jpg';
import kebabs from '../../images/kebabs.jpg';

const About = () => { //about section near the bottom of the page
  return (
    <div className='about_container' id='about'>
    <div className='about_left'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <br />
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        From our illustrious menu, dive into the real Greek experience, with great scenery to accompany endless memories
        at Little Lemon.
      </p>
    </div>
    <div className='about_right'>
      <img className="img1" src={fishpot} alt="fishpotimg" />
      <img className="img2" src={kebabs} alt="kebabimg" />
    </div>
   </div>
  )
}

export default About