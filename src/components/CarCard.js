import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

const CarCard = ({
  brand,
  model,
  image,
  description,
}) => (
  <div className="card-wrapper">
    <Link to="/">
      <div className="car-card">
        <h4>
          {brand}
        </h4>
        <img className="card-img" src={image} alt={model} />
        <h4>
          {model}
        </h4>
      </div>
    </Link>
    <div className="description">
      <p>{description}</p>
    </div>
    <div className="social-media">
      <div className="logo-container"><FaFacebookSquare /></div>
      <div className="logo-container"><FaTwitter /></div>
      <div className="logo-container"><FaInstagramSquare /></div>
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
