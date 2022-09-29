import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/users';
import { carsReducer } from './carsReducer';
import { reducerDetails } from './fetchCarDetails';

const store = configureStore(
  {
    reducer: {
      user: usersReducer,
      cars: carsReducer,
      car_details: reducerDetails,
    },
  },
);

export default store;
