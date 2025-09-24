import React, { useState } from 'react';
import Modal from 'react-modal';
import './Card.css';

Modal.setAppElement('#root');

function Card({ item }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    setClickPosition({ x: clientX, y: clientY });
    setModalIsOpen(true);
  };

  const blurbs = [
    `Released in ${item.year}, this ${item.genre.toLowerCase()} gem is a must-watch.`,
    `Looking for ${item.genre}? "${item.title}" from ${item.year} delivers.`,
    `A ${item.genre} story that captured hearts in ${item.year}.`,
    `Don't miss "${item.title}" — a ${item.genre} hit from ${item.year}.`,
    `Step into ${item.year} with this unforgettable ${item.genre} experience.`,
  ];

  const randomBlurb = blurbs[Math.floor(Math.random() * blurbs.length)];

  return (
    <>
      <div className="card" onClick={handleClick}>
        <img src={item.image} alt={item.title} className="card-image" />
        <div className="card-overlay">
          <h3 className="card-title">{item.title}</h3>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        className="card-modal"
        overlayClassName="card-overlay-bg"
        closeTimeoutMS={300}
        style={{
          content: {
            top: `${clickPosition.y}px`,
            left: `${clickPosition.x}px`,
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <div className="modal-content">
          <img src={item.image} alt={item.title} className="modal-image" />
          <div className="modal-details">
            <h2>{item.title}</h2>
            <p>{randomBlurb}</p>
            <p><strong>Genre:</strong> {item.genre}</p>
            <p><strong>Year:</strong> {item.year}</p>
            <button className="watch-button" onClick={() => alert(`Playing "${item.title}"...`)}>▶ Watch Now</button>
            <button className="close-button" onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Card;
