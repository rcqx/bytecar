import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fetchCarsSuccess } from '../redux/carsReducer';
import CarCard from './CarCard';

const Cars = () => {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars);
  const carProps = [];

  async function fetchData() {
    await axios.get('http://localhost:3000/api/v1/cars').then((res) => {
      dispatch(fetchCarsSuccess(res.data));
    });
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  carList.forEach((car) => carProps.push(
    <Link key={car.id} to="/car_details">
      <CarCard
        key={car.id}
        brand={car.brand}
        image={car.image}
        model={car.model}
        description={car.description}
      />
      ,
    </Link>,
  ));

  return (
    <div className="main-wrapper">
      <h1>Latest Models</h1>
      <h4>Please select an electric car model</h4>
      <div className="cars-wrapper">
        {carProps}
      </div>
    </div>
  );
};

export default Cars;
