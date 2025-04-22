import React from 'react';
import './Hero.css';
import pizza from '../images/pizza.jpeg';
import food from '../images/food.jpg';
import biryani from '../images/biryani.jpeg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>LIP SMACKING <br /> FO’ SURE <span>😊</span></h1>
        <p>Where flavour meets wellness.</p>
        <button className="order-btn">ORDER NOW</button>
      </div>
      <div className="hero-image">
        <img src={pizza} alt="Delicious food" />
        <img src={food} alt="Delicious food" />
        <img src={biryani} alt="Delicious food" />
      </div>
    </section>
  );
};

export default Hero;
