import { configureStore } from '@reduxjs/toolkit';
// import { authSlice } from './Auth/authSlice';
import thunk from 'redux-thunk';
import { persistedReducer } from './Auth/authSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: { auth: persistedReducer },
  middleware: [thunk],
});

export const persistor = persistStore(store);
