import { createSlice } from '@reduxjs/toolkit';
import { getDailyRate } from './DailyRate.service';
import { postDailyRateById } from './DailyRate.service';

const initialState = {
  getUpdateDailyRateByID: false,

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
    builder
      .addCase(postDailyRateById.pending, state => {
        state.getUpdateDailyRateByID = false;
      })
      .addCase(postDailyRateById.fulfilled, (state, { payload }) => {
        state.getUpdateDailyRateByID = true;
        // state.dailyRate = payload.dailyRate;
        // state.notAllowedProducts = payload.notAllowedProducts;
      });
  },
});

export const dailyRateSliceReducer = dailyRateSlice.reducer;
