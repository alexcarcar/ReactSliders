// Card.js
import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/details/${item.id}`}>
        <img src={item.image} alt={item.title} className="card-image" />
        <div className="card-overlay">
          <h3 className="card-title">{item.title}</h3>
        </div>
      </Link>
    </div>
  );
}

export default Card;
