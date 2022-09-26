import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingsReducer';
import { carsReducer, carDetailsReducer } from './carsReducer';

const store = configureStore(
  {
    reducer: {
      greeting: greetingReducer,
      cars: carsReducer,
      car_details: carDetailsReducer,
    },
  },
);

export default store;
