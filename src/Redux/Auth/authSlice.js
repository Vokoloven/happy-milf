import { createSlice } from '@reduxjs/toolkit';
import operations from './auth.service';

export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: {
      email: null,
      username: null,
      id: null,
      userData: {
        notAllowedProducts: [],
        weight: 0,
        height: 0,
        age: 0,
        bloodType: 0,
        desiredWeight: 0,
        dailyRate: 0,
      },
    },
    accessToken: null,
    refreshToken: null,
    sid: null,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder.addCase(operations.register.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(operations.logIn.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
      state.isLoggedIn = true;
    });
    builder.addCase(operations.logOut.fulfilled, (state, { payload }) => {
      state.user.email = null;
      state.user.username = null;
      state.user.id = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.isLoggedIn = false;
    });
  },
});
