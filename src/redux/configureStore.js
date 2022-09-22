import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingsReducer';

const store = configureStore(
  {
    reducer: {
      greeting: greetingReducer,
    },
  },
);

export default store;
