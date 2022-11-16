import { createSlice } from '@reduxjs/toolkit';
import { getDailyRate } from 'redux/DailyRateApi';

const initialState = {
  user: {
    weight: null,
    height: null,
    age: null,
    desiredWeight: null,
    bloodType: null,
  },
};

export const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  extraReducers: {
    [getDailyRate.fulfilled](state, action) {
      state.user = action.payload.user;
    },
  },
});
