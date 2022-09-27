import React from 'react';
import { useSelector } from 'react-redux';

const CarDetails = () => {
  const carDetails = useSelector((state) => state.car_details);

  return (
    <div className="details-wrapper">
      <h1 className="text-3xl font-bold">{carDetails.brand}</h1>
      <img className="card-img" src={carDetails.image} alt={carDetails.model} />
      <h4 className="text-2xl">{carDetails.model}</h4>
      <p>{carDetails.description}</p>
    </div>
  );
};

export default CarDetails;
