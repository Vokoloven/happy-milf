import { createSlice } from '@reduxjs/toolkit';
import operations from './auth.service';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      username: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: {
    [operations.register.fulfilled](state, action) {
      console.log(action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
});
