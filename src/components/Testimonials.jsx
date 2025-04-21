// src/components/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import './Testimonials.css';

const testimonials = [
  {
    name: 'XYZ',
    image: '/images/i1.jpeg',
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: 'XYZ',
    image: '/images/i4.jpeg',
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: 'XYZ',
    image: '/images/i2.jpeg',
    rating: 4.5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: 'XYZ',
    image: '/images/i3.jpeg',
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: 'XYZ',
    image: '/images/i5.jpeg',
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  // Render star icons
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={`full-${i}`} />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key="half" />);
    }

    return stars;
  };

  return (
    <section className="testimonial-section" id="testimonials">
      <h2 className="testimonial-title">TESTIMONIALS</h2>
      <div className="testimonial-grid">
        {visibleTestimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <div className="testimonial-stars">
              {renderStars(t.rating)}
            </div>
            <p className="testimonial-text">“{t.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
