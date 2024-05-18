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
                <label>Name: <input type="text" name='name' id='name' /></label>
                <label>Email: <input type="email" name='email' id='email' /></label>
                <label>Date: <input type="date" name='rdate' id='rdate' /></label>
                <label>Time: <input type="time" name='appt' id='time' /></label>
                <label>Special Requests: <textarea name="requests" id="requests" cols="30" rows="10">Any requests, let us know...</textarea></label>
            </form>
            </div>
            <div className="reserve_box_right">
                <form>
                    <label>Name on card* <input type="text" name='cardname' id='cardname'/></label>
                    <label>Card Number* <input type='tel' name='cardno' id='cardno' maxlength='16'/></label>
                    <label>CVC* <input type='tel' name='cvc' id='cvc' maxlength='4'/></label>
                    <input type="checkbox" name="checks" id="checks" />
                    <label for='checks'> Save card for next reservation</label>
                </form>
            </div>
            <button className='confbutton'>Confirm Reservation</button>
          </div>
      </div>
      <Footer/>
      </>
  )
}

export default Reserve