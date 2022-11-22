import { configAxios } from 'service/config.axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserInfoApiService = createAsyncThunk(
  'getUser/Info',
  async (_, thunkAPI) => {
    try {
      const { data } = await configAxios.get('user');

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
