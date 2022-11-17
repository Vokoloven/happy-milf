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
  extraReducers: builder => {
    builder.addCase(getDailyRate.fulfilled, (state, { payload }) => {
      state.dailyRate = payload.dailyRate;
      state.notAllowedProducts = payload.notAllowedProducts;
    });
  },
});

export const dailyRateSliceReducer = dailyRateSlice.reducer;
