import React from 'react';
import './Reserve.css';
import Header from './Header';
import Footer from './Footer';

const Reserve = () => {
  return (
    <><Header />
    <div className="reserve_container">
        <h1>Reserve-a-Table</h1>
          <div className='reserve_box'>
            <div className="reserve_box_left">
            <form>
                <label>Name: * <br /><input type="text" name='name' id='name' required/></label>
                <label>Email: * <br /> <input type="email" name='email' id='email' required/></label>
                <label>Date: * <br /> <input type="date" name='rdate' id='rdate' required/></label>
                <label>Time: * <br /> <input type="time" name='appt' id='time' className='times'required /></label>
                <label>Special Requests: <br /> <textarea name="requests" id="requests" cols="30" rows="10" placeholder='Any requests, let us know...'></textarea></label>
            </form>
            </div>
            <div className="reserve_box_right">
                <form>
                    <label>Name on card * <br /> <input type="text" name='cardname' id='cardname' required/></label>
                    <label>Card Number * <br /> <input type='tel' name='cardno' id='cardno' maxlength='16' required/></label>
                    <label>CVC * <br /> <input type='tel' name='cvc' id='cvc' maxlength='4' required/></label>
                     <label for='checks' className='checklabel'><input type="checkbox" name="checks" id="checks" className='checkb'/></label>
                     <h3>Save card for next reservation</h3>
                </form>
                <button className='confbutton' type='button'>Confirm Reservation</button>
            </div>
          </div>
      </div>
      <Footer/>
      </>
  )
}

export default Reserve