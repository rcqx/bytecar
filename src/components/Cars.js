import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchCarsSuccess } from '../redux/carsReducer';

const Cars = () => {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars);

  async function fetchData() {
    await axios.get('http://localhost:3000/api/v1/cars').then((res) => {
      dispatch(fetchCarsSuccess(res.data));
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>{carList}</div>
  );
};

export default Cars;
