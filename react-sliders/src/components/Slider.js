// Slider.js
import React, { useRef } from 'react';
import './Slider.css';
import Card from './Card';

function Slider({ items }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={() => scroll('left')}>‹</button>
      <div className="slider" ref={sliderRef}>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <button className="slider-button right" onClick={() => scroll('right')}>›</button>
    </div>
  );
}

export default Slider;
