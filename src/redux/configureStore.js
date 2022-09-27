import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingsReducer';
import { carsReducer } from './carsReducer';
import { reducerDetails } from './fetchCarDetails';

const store = configureStore(
  {
    reducer: {
      greeting: greetingReducer,
      cars: carsReducer,
      car_details: reducerDetails,
    },
  },
);

export default store;
