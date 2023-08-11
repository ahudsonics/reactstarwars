// components/StarshipCard.js
import React from 'react';

function StarshipCard({ starship }) {
  return (
    <div className="starship-card">
      <p>{starship.name}</p>
    </div>
  );
}

export default StarshipCard;
