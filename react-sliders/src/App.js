// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import categories from './data/categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        {categories.map((category, index) => (
          <section key={index}>
            <h2 className="category-title">{category.title}</h2>
            <Slider items={category.items} />
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;