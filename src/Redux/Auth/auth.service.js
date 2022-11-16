import { createAsyncThunk } from '@reduxjs/toolkit';
import { configAxios } from './config.axios';

export const register = createAsyncThunk(
  'register/auth',
  async (data, thunkAPI) => {
    try {
      const response = await configAxios.post('auth/register', data);

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const operations = {
  register,
};

export default operations;
