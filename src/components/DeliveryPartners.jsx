// src/components/DeliveryPartners.jsx
import React from 'react';
import './DeliveryPartners.css';
import Zomato from '../images/Zomato.jpeg';
import Swiggy from '../images/Swiggy.png';
import uberEats from '../images/uber-eats.jpeg';

const partners = [
  { name: 'Zomato', logo: Zomato },
  { name: 'Swiggy', logo: Swiggy },
  { name: 'Uber Eats', logo: uberEats },
];

const DeliveryPartners = () => {
  return (
    <section className="delivery-partners">
      <h3>Delivery Partners</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="partner-logos">
        {partners.map((partner, index) => (
          <div className="logo-container" key={index}>
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliveryPartners;
