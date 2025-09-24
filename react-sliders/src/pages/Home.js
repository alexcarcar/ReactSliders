// Home.js
import React from 'react';
import './Home.css';
import Slider from '../components/Slider';
import categories from '../data/categories';

function Home() {
  return (
    <div className="home">
      {categories.map((category, index) => (
        <section key={index} className="category-section">
          <h2 className="category-title">{category.title}</h2>
          <Slider items={category.items} />
        </section>
      ))}
    </div>
  );
}

export default Home;
