import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchCarDetailsSuccess } from '../redux/carsReducer';

const CarDetails = () => {
  const dispatch = useDispatch();
  const carDetails = useSelector((state) => state.car_details);

  async function fetchData() {
    await axios.get('http://localhost:3000/api/v1/cars/1').then((res) => {
      dispatch(fetchCarDetailsSuccess(res.data));
    });
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

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
