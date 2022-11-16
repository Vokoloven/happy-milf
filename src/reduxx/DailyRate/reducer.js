import { dailyRateSlice } from './DailyRateSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  dailyRate: dailyRateSlice,
});
