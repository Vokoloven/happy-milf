import { configAxios } from 'service/config.axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postDayApiService = createAsyncThunk(
  'post/EatenProducts',
  async (params, thunkAPI) => {
    try {
      const { data } = await configAxios.post('day', params);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const postDeleteDayApiService = createAsyncThunk(
  'postDelete/EatenProducts',

  async (params, thunkAPI) => {
    try {
      const { data } = await configAxios.delete('day', { data: params });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const operations = {
  postDayApiService,
  postDeleteDayApiService,
};

export default operations;
