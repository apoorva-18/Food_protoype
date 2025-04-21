// src/components/MenuHighlight.jsx
import React from 'react';
import './MenuHighlight.css';

const items = [
  {
    title: 'GRILLED CHICKEN',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
    image: '/images/chicken.jpg',
    tag: 'BESTSELLER',
  },
  {
    title: 'KEBABS',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/kebab.jpeg',
  },
  {
    title: 'GRILLED BURGER',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/burgers.jpg',
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
