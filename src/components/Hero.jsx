import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>LIP SMACKING <br /> FO’ SURE <span>😊</span></h1>
        <p>Where flavour meets wellness.</p>
        <button className="order-btn">ORDER NOW</button>
      </div>
      <div className="hero-image">
        <img src="/images/pizza.jpeg" alt="Delicious food" />
        <img src="/images/food.jpg" alt="Delicious food" />
        <img src="/images/biryani.jpeg" alt="Delicious food" />
      </div>
    </section>
  );
};

export default Hero;
