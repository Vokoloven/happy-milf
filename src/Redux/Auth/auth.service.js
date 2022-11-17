import { createAsyncThunk } from '@reduxjs/toolkit';
import { configAxios } from './config.axios';

const register = createAsyncThunk(
  'register/auth',
  async (authData, thunkAPI) => {
    try {
      const { data } = await configAxios.post('auth/register', authData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const logIn = createAsyncThunk('login/auth', async (authData, thunkAPI) => {
  try {
    const { data } = await configAxios.post('auth/login', authData);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const logOut = createAsyncThunk('logout/auth', async (authData, thunkAPI) => {
  try {
    const { data } = await configAxios.post('auth/logout', authData);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const operations = {
  register,
  logIn,
  logOut,
};

export default operations;
