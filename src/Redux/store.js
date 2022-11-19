import { configureStore } from '@reduxjs/toolkit';
import { dailyRateSlice } from 'Redux/DailyRate/DailyRateSlice';
import { persistedReducer } from './Auth/authSlice';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: { auth: persistedReducer, dailyRate: dailyRateSlice.reducer },
  middleware: [thunk],
});

export const persistor = persistStore(store);
