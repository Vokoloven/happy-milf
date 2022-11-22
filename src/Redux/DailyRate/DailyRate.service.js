import { createAsyncThunk } from '@reduxjs/toolkit';
import { configAxios } from 'service/config.axios';

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

export const postDailyRateById = createAsyncThunk(
  'rate/dailyId',
  async (userData, thunkAPI) => {
    const state = thunkAPI.getState();
    const id = state.auth.user.id;

    try {
      const { data } = await configAxios.post(`/daily-rate/${id}`, userData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
