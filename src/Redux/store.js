import { configureStore } from '@reduxjs/toolkit';
import { dailyRateSlice } from 'reduxx/DailyRate/DailyRateSlice';
// import { authSlice } from './Auth/authSlice';
import thunk from 'redux-thunk';
import { persistedReducer } from './Auth/authSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: { auth: persistedReducer, dailyRate: dailyRateSlice.reducer },
  middleware: [thunk],
});

export const persistor = persistStore(store);
