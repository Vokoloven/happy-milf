import { configureStore } from '@reduxjs/toolkit';
import { dailyRateSlice } from 'reduxx/DailyRate/DailyRateSlice';
import { authSlice } from './Auth/authSlice';

export const store = configureStore({
  reducer: { auth: authSlice.reducer, dailyRate: dailyRateSlice.reducer },
});
