// Details.js
import React from 'react';
import { useParams } from 'react-router-dom';
import categories from '../data/categories';
import './Details.css';

function Details() {
  const { id } = useParams();

  // Flatten all category items into one array
  const allItems = categories.flatMap((category) => category.items);
  const item = allItems.find((item) => item.id === id);

  if (!item) {
    return (
      <div className="details">
        <h2>Item not found</h2>
        <p>We couldn't locate the content you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="details">
      <div className="details-content">
        <img src={item.image} alt={item.title} className="details-image" />
        <div className="details-info">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p><strong>Genre:</strong> {item.genre}</p>
          <p><strong>Year:</strong> {item.year}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
