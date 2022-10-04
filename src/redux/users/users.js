/* eslint-disable no-param-reassign */
import { createAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signup, login } from './api';

export const getUsername = createAction('users/username', () => ({
  payload: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).user : null,
}));

export const loginUser = createAsyncThunk('users/loging', async (username) => {
  const response = await login(username);
  return response;
});

export const logoutUser = createAsyncThunk('users/logout', () => ({
  payload: null,
}));

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
    [getUsername]: (state, { payload }) => {
      state.username = payload;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.username = payload.user;
      state.status = 'success';
    },
    [loginUser.rejected]: (state) => {
      state.status = 'rejected';
    },
    [loginUser.pending]: (state) => {
      state.status = 'loading';
    },
    [logoutUser]: (state, { payload }) => {
      state.username = payload.user;
    },
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
