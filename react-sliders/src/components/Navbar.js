// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎬 Alex Stream</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/series">Series</a></li>
        <li><a href="/my-list">My List</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
