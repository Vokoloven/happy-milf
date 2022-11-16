import { configureStore } from '@reduxjs/toolkit';
import { dailyRateSliceReducer } from './DailyRate/DailyRateSlice';

export const store = configureStore({
  reducer: dailyRateSliceReducer,
});
