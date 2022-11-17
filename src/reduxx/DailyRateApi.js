import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const getDailyRate = createAsyncThunk(
  'rate/daily',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/daily-rate', userData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
