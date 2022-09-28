import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/users';

const store = configureStore(
  {
    reducer: {
      user: usersReducer,
    },
  },
);

export default store;
