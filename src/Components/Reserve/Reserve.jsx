import React, { useState } from 'react';
import './Reserve.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Reserve = () => { //reserve page
  const [name, setName] = useState('');
  const [availableTimes,setAvailableTimes] = useState('');
  const [date,setDate] = useState('');

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    name: '', //setting states for all reservation inputs
    email: '',
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values, [name]: value //updating inputs after they have been entered successfully
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    const validationErrors = {};
    if (!values.name.trim()) { //validation of each input type below, to make sure that it is the correct input type
      validationErrors.name = "Name is Required";
    }
    if (!values.email.trim()) {
      validationErrors.email = "Email is Required";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!values.date.trim()) {
      validationErrors.date = "Date is required";
    }
    if (!values.time.trim()) {
      validationErrors.time = "Time is required";
    }

    setErrors(validationErrors);
  };

  return (
    <>
      <Header />
      <div className="reserve_container">
        <h1>Reserve-a-Table</h1>
        <div className='reserve_box'>
          <div className="reserve_box_left">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                Name: * <br />
                <input type="text" name='name' value={values.name} onChange={handleInput} id='name' required />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </label>
              <label htmlFor="email">
                Email: * <br />
                <input type="email" name='email' id='email' value={values.email} required onChange={handleInput} />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </label>
              <label htmlFor="date">
                Date: * <br />
                <input type="date" name='date' id='date' value={values.date} onChange={handleInput} required />
                {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
              </label>
              <label htmlFor="time">
                Time: * <p>Open from 12pm to 10pm</p>
                <select name="time" id='time' value={values.time} onChange={handleInput}>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option> {/*selection of times that guests can book*/}
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                </select>
                {errors.time && <p style={{ color: "red" }}>{errors.time}</p>}
              </label>
              <label htmlFor="guests">
                Number of guests <br />
                <input type="number" name="guests" placeholder='1' min={1} max={10} id="guests" value={values.guests} onChange={handleInput} />
              </label>
              <label htmlFor="occasion">
                Occasion: <br />
                <select name="occasion" id="occasion" value={values.occasion} onChange={handleInput}>
                  <option value="">Select an occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Date">Date</option>
                  <option value="Party">Party</option>
                </select>
              </label>
              <button className='confbutton' type='submit'>
                <Link to="/booked" className='reserve_menu_link'>Confirm Reservation</Link>
              </button>
            </form>
          </div>
          <div className="reserve_box_right">
            <form>
              <h2 className='booking-mob'>£5 booking fee*</h2>
              <label htmlFor='cardname'>
                Name on card * <br />
                <input type="text" name='cardname' id='cardname' required />
              </label>
              <label htmlFor='cardno'>
                Card Number * <br />
                <input type='tel' name='cardno' id='cardno' maxLength='16' required />
              </label>
              <label htmlFor='cvc'>
                CVC * <br />
                <input type='tel' name='cvc' id='cvc' maxLength='4' required />
              </label>
              <label htmlFor='checks' className='checklabel'>
                <input type="checkbox" name="checks" id="checks" className='checkb' />
              </label>
              <h3>Save card for next reservation</h3>
              <h2 className='booking-norm'>£5 booking fee*</h2>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reserve