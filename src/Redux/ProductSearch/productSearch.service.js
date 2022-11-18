import { configAxios } from 'Redux/config.axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const productsSearch = createAsyncThunk(
  'register/auth',
  async (search, thunkAPI) => {
    try {
      const { data } = await configAxios.post('product', search);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
