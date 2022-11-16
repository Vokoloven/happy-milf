import { createSlice } from '@reduxjs/toolkit';
import operations from './auth.service';

export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: {
      id: null,
      username: null,
      email: null,
    },
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder.addCase(operations.register.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(operations.logIn.fulfilled, (state, { payload }) => {});
  },
});
