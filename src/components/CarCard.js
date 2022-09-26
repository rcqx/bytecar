import React from 'react';
import propTypes from 'prop-types';

const CarCard = ({
  brand,
  model,
  image,
  description,
}) => (
  <div className="card-wrapper">
    <div className="car-card">
      <h4>
        {brand}
      </h4>
      <img className="card-img" src={image} alt={model} />
      <h4>
        {model}
      </h4>
    </div>
    <div className="description">
      <p>{description}</p>
    </div>
  </div>
);

CarCard.propTypes = {
  brand: propTypes.string.isRequired,
  model: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default CarCard;
