import React from 'react';
import { Link } from 'react-router-dom';

function PrimaryButton({ text, to = "#", link, onClick }) {
  // Använd 'link' prop för bakåtkompatibilitet, annars 'to'
  const destination = link || to;

  if (onClick) {
    return (
      <div className="primary-button">
        <button onClick={onClick}>{text}</button>
      </div>
    );
  }

  if (destination === "#") {
    return (
      <div className="primary-button">
        <a href="#">{text}</a>
      </div>
    );
  }

  return (
    <div className="primary-button">
      <Link to={destination}>{text}</Link>
    </div>
  );
}

export default PrimaryButton;