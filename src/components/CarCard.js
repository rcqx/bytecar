import React from 'react';
import propTypes from 'prop-types';

const CarCard = ({ brand, model, image }) => (
  <div className="car-card">
    <h3>{brand}</h3>
    <img className="card-img" src={image} alt={model} />
    <h3>{model}</h3>
  </div>
);

CarCard.propTypes = {
  brand: propTypes.string.isRequired,
  model: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};

export default CarCard;
