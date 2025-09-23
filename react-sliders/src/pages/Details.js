// Details.js
import React from 'react';
import { useParams } from 'react-router-dom';
import items from '../data/allItems'; // Combine all slider items into one array or fetch from API
import './Details.css';

function Details() {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  if (!item) {
    return <div className="details">Item not found.</div>;
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
