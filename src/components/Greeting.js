import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchMessageSuccess } from '../redux/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.greeting);

  async function fetchData() {
    await axios.get('http://localhost:3000/api/v1/cars').then((res) => {
      dispatch(fetchMessageSuccess(res.data));
    });
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <h1>{msg}</h1>
  );
};

export default Greeting;
