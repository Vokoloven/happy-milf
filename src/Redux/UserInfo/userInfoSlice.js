import { getUserInfoApiService } from './userInfo.service';
import { createSlice } from '@reduxjs/toolkit';

export const getUserInfo = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: [],
    isLoadedUserData: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getUserInfoApiService.pending, state => {})
      .addCase(getUserInfoApiService.fulfilled, (state, { payload }) => {
        state.userInfo = payload;
      });
  },
});
