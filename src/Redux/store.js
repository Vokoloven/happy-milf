import { configureStore } from '@reduxjs/toolkit';
import { dailyRateSlice } from 'Redux/DailyRate/DailyRateSlice';
import { postDaySlice } from 'Redux/PostDay/postDaySlice';
import { getUserInfo } from 'Redux/UserInfo/userInfoSlice';
import { persistedReducer } from './Auth/authSlice';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    dailyRate: dailyRateSlice.reducer,
    postDay: postDaySlice.reducer,
    userInfo: getUserInfo.reducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
