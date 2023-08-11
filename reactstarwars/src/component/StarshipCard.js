// components/StarshipCard.js
import React from "react";

const StarshipCard = ({ starship }) => {
  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default StarshipCard;
