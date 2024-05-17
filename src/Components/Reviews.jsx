import React from 'react';
import './Reviews.css';
import man1 from '../images/man1.jpg';
import man2 from '../images/man2.jpg';
import woman1 from '../images/woman1.jpg';
import woman2 from '../images/woman2.png';

const Reviews = () => {
  return (
    <div className="reviews_container">
        <h1>Reviews/Testemonials</h1>
        <div className="reviews_grid">
            <div className='reviews'>
                <h2>Stacey</h2>
                <img src={woman1} alt="woman1" />
                <h3>9/10</h3>
                <p>Really enjoyed my meal. Definitely recommend</p>
            </div>
            <div className='reviews'>
                <h2>Jacob</h2>
                <img src={man1} alt="man1" />
                <h3>7.5/10</h3>
                <p>Really nice interior inside the restaurant. Quite good food too.</p>
            </div>
            <div className='reviews'>
                <h2>Jenny</h2>
                <img src={woman2} alt="woman2" />
                <h3>9/10</h3>
                <p>Amazing restaurant, from the food to the customer service.</p>
            </div>
            <div className='reviews'>
                <h2>Pep</h2>
                <img src={man2} alt="man2" />
                <h3>8.3/10</h3>
                <p>Very good food. Decent dining arrangements too.</p>
            </div>
        </div>
    </div>
  )
}

export default Reviews