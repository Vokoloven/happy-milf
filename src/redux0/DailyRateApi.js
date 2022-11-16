import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const getDailyRate = createAsyncThunk('rate/daily', async user => {
  try {
    const { data } = await axios.post('/daily-rate', user);
    return data;
  } catch (error) {}
});
