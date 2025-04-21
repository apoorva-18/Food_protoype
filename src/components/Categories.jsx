import React from 'react';
import './Categories.css';

const categories = [
  {
    title: 'WRAPS AND BURGERS',
    image: '/images/wraps.jpeg',
  },
  {
    title: 'SALADS',
    image: '/images/salads.jpeg',
  },
  {
    title: 'COMBO MEALS',
    image: '/images/combo.jpeg',
  },
  {
    title: 'DRINKS',
    image: '/images/drinks.jpeg',
  },
];

const Categories = () => {
  return (
    <section className="categories-section">
      <h2 className="categories-heading">CATEGORIES</h2>
      <div className="categories-grid-wrapper">
      <div className="categories-grid">
        {categories.map((item, index) => (
          <div key={index} className="category-card">
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
              </div>
          </div>
        ))}

        <div className="more-card">
          <h3>CHECK OUT MORE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, a sed do eiusmod tempor incid ut labore.</p>
          <button className="order-btn">ORDER NOW</button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Categories;
