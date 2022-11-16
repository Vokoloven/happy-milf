import { createSlice } from '@reduxjs/toolkit';
import { getDailyRate } from 'reduxx/DailyRateApi';

const initialState = {
  user: {
    weight: null,
    height: null,
    age: null,
    desiredWeight: null,
    bloodType: null,
  },
  dailyRate: '',
  notAllowedProducts: [],
};

export const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  extraReducers: {
    [getDailyRate.fulfilled](state, action) {
      state.user = action.payload.user;
      state.dailyRate = action.payload.dailyRate;
      state.notAllowedProducts = action.payload.notAllowedProducts;
    },
  },
});

export const dailyRateSliceReducer = dailyRateSlice.reducer;
