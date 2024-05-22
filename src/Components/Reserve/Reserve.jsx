import React, { useState } from 'react';
import './Reserve.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Reserve = () => {
  const [name, setName] = useState('');
  const [availableTimes,setAvailableTimes] = useState('');
  const [date,setDate] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTimeChange = (event) => {
    setAvailableTimes(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted name:', name);
    console.log('Submitted time:', availableTimes);
    console.log('SUbmitted date:', date );
  };

  return (
    <><Header />
    <div className="reserve_container">
        <h1>Reserve-a-Table</h1>
          <div className='reserve_box'>
            <div className="reserve_box_left">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: * <br /><input type="text" name='name' value={name} onChange={handleNameChange} id='name' required/></label>
                <label htmlFor="email">Email: * <br /> <input type="email" name='email' id='email' required/></label>
                <label htmlFor="rdate">Date: * <br /> <input type="date" name='rdate' id='rdate' value={date} onChange={handleDateChange} required/></label>
                <label htmlFor="time">Time: * <p>Open from 12pm to 10pm</p> <select name="time" id='time' value={availableTimes} onChange={handleTimeChange}>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option></select></label> 
                <label htmlFor="guests">Number of guests <br /> <input type="number" placeholder='1' min={1} max={10} id="guests" /> </label>
                <label htmlFor="requests">Occasion: <br /> <select name="ocassions" id="ocassion">
                  <option value="0">Select an occassion</option>
                  <option value="1">Birthday</option>
                  <option value="2">Anniversary</option>
                  <option value="3">Date</option>
                  <option value="4">Party</option></select></label>
                  <button className='confbutton' type='submit'><Link to="/booked" className='reserve_menu_link'>Confirm Reservation</Link></button>
            </form>
            </div>
            <div className="reserve_box_right">
                <form>
                    <h2 className='booking-mob'>£5 booking fee*</h2>
                    <label htmlFor='cardname'>Name on card * <br /> <input type="text" name='cardname' id='cardname' required/></label>
                    <label htmlFor='cardno'>Card Number * <br /> <input type='tel' name='cardno' id='cardno' maxLength='16' required/></label>
                    <label htmlFor='cvc'>CVC * <br /> <input type='tel' name='cvc' id='cvc' maxLength='4' required/></label>
                     <label htmlFor='checks' className='checklabel'><input type="checkbox" name="checks" id="checks" className='checkb'/></label>
                     <h3>Save card for next reservation</h3>
                     <h2 className='booking-norm'>£5 booking fee*</h2>
                </form>
                
            </div>
          </div>
      </div>
      <Footer/>
      </>
  )
}

export default Reserve