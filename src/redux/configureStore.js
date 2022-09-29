import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingsReducer';
import { carsReducer } from './carsReducer';
import { reducerDetails } from './fetchCarDetails';
import { reservationsReducer } from './reservationsReducer';

const store = configureStore(
  {
    reducer: {
      greeting: greetingReducer,
      cars: carsReducer,
      car_details: reducerDetails,
      reservations: reservationsReducer,
    },
  },
);

export default store;
