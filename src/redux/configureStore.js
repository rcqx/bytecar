import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingsReducer';
import carsReducer from './carsReducer';

const store = configureStore(
  {
    reducer: {
      greeting: greetingReducer,
      cars: carsReducer,
    },
  },
);

export default store;
