import { createAsyncThunk } from '@reduxjs/toolkit';
import { configAxios } from 'Redux/config.axios';

export const getDailyRate = createAsyncThunk(
  'rate/daily',
  async (userData, thunkAPI) => {
    try {
      const { data } = await configAxios.post('/daily-rate', userData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
