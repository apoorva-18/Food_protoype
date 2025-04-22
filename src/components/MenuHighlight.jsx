// src/components/MenuHighlight.jsx
import React from 'react';
import './MenuHighlight.css';
import chicken from '../images/chicken.jpg';
import kebab from '../images/kebab.jpeg';
import burgers from '../images/burgers.jpg';


const items = [
  {
    title: 'GRILLED CHICKEN',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
    image: chicken,
    tag: 'BESTSELLER',
  },
  {
    title: 'KEBABS',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: kebab,
  },
  {
    title: 'GRILLED BURGER',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: burgers,
  },
];

const MenuHighlight = () => {
  return (
    <section className="menu-highlight-section">
      <div className="menu-grid">
        {items.map((item, idx) => (
          <div className="menu-card" key={idx}>
            {item.tag && <span className="bestseller-badge">{item.tag}</span>}
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <button className='order-btn'>Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuHighlight;
