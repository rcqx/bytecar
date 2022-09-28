/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signup, login } from './api';

export const loginUser = createAsyncThunk('users/login', () => ({
  payload: null,
}));

export const logoutUser = createAsyncThunk('users/logout', async (username) => {
  const response = await login(username);
  return response;
});

export const signupUser = createAsyncThunk('users/singup', async (username) => {
  const response = await signup(username);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    status: null,
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      state.username = payload.user;
      state.status = 'success';
    },
    [signupUser.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

export default userSlice.reducer;
