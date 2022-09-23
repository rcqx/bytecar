import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchCarsSuccess } from '../redux/carsReducer';
import CarCard from './CarCard';
import '../Cars.css';

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
  }, []);

  carList.forEach((car) => carProps.push(
    <CarCard
      key={car.id}
      brand={car.brand}
      image={car.image}
      model={car.model}
    />,
  ));

  return (
    <div className="main-wrapper">
      <h1>Latest Models</h1>
      <h3>Please select an electric car model</h3>
      <div className="cars-wrapper">
        {carProps}
      </div>
    </div>
  );
};

export default Cars;
