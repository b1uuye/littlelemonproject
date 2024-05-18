import React from 'react';
import './Specials.css';
import bruchetta from '../images/brushettasmall.jpg';
import greeksalad from '../images/smallgreek.jpg';
import pasta from '../images/pasta.jpg';
import delivery from '../images/delivery.png';

const Specials = () => {
  return (
    <div className="specials_container" id='specials'>
        <div className="specials_title">
            <h1>This Week's Specials</h1>
            <button>Online Menu</button>
        </div>
        <div className="specials_grid">
            <div className="specials">
                <img src={bruchetta} alt="bruchetta"/>
                <div className="price">
                <h2>Bruchetta</h2>
                <h4>£12.99</h4>
                </div>
                <p>Our bruchetta is made from grilled bread that has been smeared in
                    garlic and seasoned with salt and olive oil.
                </p>
                <br />
                <br />
                <div className="delivery">
                <h3>Order a delivery</h3>
                <img src={delivery} alt="deliverysign" />
                </div>
            </div>
            <div className="specials">
                <img src={greeksalad} alt="greeksalad"/>
                <div className="price">
                <h2>Greek Salad</h2>
                <h4>£8.99</h4>
                </div>
                <p>The famous Greek salad of crispy lettuce, peppers, olives and our
                    Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                </p>
                <br />
                <div className="delivery">
                <h3>Order a delivery</h3>
                <img src={delivery} alt="deliverysign" />
                </div>
            </div>
            <div className="specials">
                <img src={pasta} alt="pasta"/>
                <div className="price">
                <h2>Special Pasta</h2>
                <h4>£10.99</h4>
                </div>
                <p>Our very own signature special pasta consists of pasta glazed with special tomato sauce
                    with options for lemon and herb drizzle, topped with some thyme.
                </p>
                <br />
                <div className="delivery">
                <h3>Order a delivery</h3>
                <img src={delivery} alt="deliverysign" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Specials