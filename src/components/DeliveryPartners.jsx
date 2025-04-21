// src/components/DeliveryPartners.jsx
import React from 'react';
import './DeliveryPartners.css';

const partners = [
  { name: 'Zomato', logo: '/images/Zomato.jpeg' },
  { name: 'Swiggy', logo: '/images/Swiggy.png' },
  { name: 'Uber Eats', logo: '/images/uber-eats.jpeg' },
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
