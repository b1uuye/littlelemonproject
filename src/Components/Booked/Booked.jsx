import React from 'react';
import './Booked.css';
import reserve from '../Reserve/Reserve';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



const Booked = () => { //confirmation page once a reservation has been successfully booked
  return (
    <>
    <Header/>
    <div className='booked_container'> 
        <div className='booked_box'>
        <FontAwesomeIcon icon={faCircleCheck} className='tick' size="10x" />
        <h1>Your reservation has been confirmed!</h1>
        <h3>You will receive an email with all the details.</h3>
        <p>Upon arrival please confirm your Name and Email address for reservation</p>
        </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Booked