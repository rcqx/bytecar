import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { FaFacebookSquare, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
import { fetchCarsSuccess } from '../redux/carsReducer';
import CarCard from './CarCard';
import { request } from '../redux/users/api';

const Cars = () => {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars);
  const carProps = [];

  async function fetchData() {
    await request.get('http://localhost:3000/api/v1/cars').then((res) => {
      dispatch(fetchCarsSuccess(res.data));
    });
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-linegit
  }, []);

  carList.forEach((car) => carProps.push(
    <div key={car.id} className="card-wrapper">
      <Link key={car.id} to="/car_details">
        <CarCard
          key={car.id}
          id={car.id}
          brand={car.brand}
          image={car.image}
          model={car.model}
          description={car.description}
        />
      </Link>
      <div className="social-media">
        <div className="logo-container"><FaFacebookSquare /></div>
        <div className="logo-container"><FaTwitter /></div>
        <div className="logo-container"><FaInstagramSquare /></div>
      </div>
    </div>,
  ));

  return (
    <div className="main-wrapper">
      <h1 className="text-3xl font-bold mb-4 antialised">Bytecar available electric models</h1>
      <h4 className="text-2xl antialised">Please select a model</h4>
      <div className="cars-wrapper">
        {carProps}
      </div>
    </div>
  );
};

export default Cars;
