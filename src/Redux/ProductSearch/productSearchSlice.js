import { createSlice } from '@reduxjs/toolkit';
import { productsSearch } from './productSearch.service';

const productsSearchSlice = createSlice({
  name: 'search',

  initialState: {},
  reducers: {
    getSearch(state, { payload }) {
      console.log(payload);
    },
  },
});
