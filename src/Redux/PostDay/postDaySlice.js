import { createSlice } from '@reduxjs/toolkit';
import operations from './postDay.service';

export const postDaySlice = createSlice({
  name: 'day',
  initialState: {
    isAddedProductInList: false,
    isDeletedProductInList: false,
    dayId: '',
  },

  reducers: {
    addSummaryData(state, action) {
      state.dayId = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(operations.postDayApiService.pending, state => {
        state.isAddedProductInList = false;
      })
      .addCase(operations.postDayApiService.fulfilled, state => {
        state.isAddedProductInList = true;
      });
    builder
      .addCase(operations.postDeleteDayApiService.pending, state => {
        state.isDeletedProductInList = false;
      })
      .addCase(operations.postDeleteDayApiService.fulfilled, state => {
        state.isDeletedProductInList = true;
      });
  },
});

export const { addSummaryData } = postDaySlice.actions;
