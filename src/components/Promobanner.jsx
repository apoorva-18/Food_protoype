// src/components/PromoBanner.jsx
import React from 'react';
import './PromoBanner.css';

const PromoBanner = () => {
  return (
    <section className="promo-banner">
      <div className="promo left">
        <img src="/images/wraps.jpeg" alt="Promo Left" />
        <div className="promo-text">
          <h3>GET 40% OFF</h3>
          <p>
            Savor the taste of Grillmama! Enjoy 40% off on selected meals through our special promo code.
          </p>
          <button className="order-btn">ORDER NOW</button>
        </div>
      </div>

      <div className="promo right">
        <img src="/images/burgers.jpg" alt="Promo Right" />
        <div className="promo-text">
          <h3>GET 40% OFF</h3>
          <p>
            Get a kick out of saving! Snap 40% off all items from 5 PM - 8 PM only at Grillmama!
          </p>
          <button className="order-btn">ORDER NOW</button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
