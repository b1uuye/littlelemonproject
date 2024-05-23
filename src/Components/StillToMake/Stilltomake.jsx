import React from 'react';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Stilltomake.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Stilltomake = () => {
  return (
    <>
    <Header/>
    <div className="still-to-make">
      <FontAwesomeIcon icon={faPersonDigging} className='digimg' size="10x" />
      <h1>Page under construction</h1>
    </div>
    <Footer/>
    </>
  )
}

export default Stilltomake