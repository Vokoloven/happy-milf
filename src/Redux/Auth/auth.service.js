import { createAsyncThunk } from '@reduxjs/toolkit';
import { configAxios } from './config.axios';

const token = {
  set(token) {
    configAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    configAxios.defaults.headers.common.Authorization = '';
  },
};

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

    token.set(data.accessToken);
    console.log(configAxios.defaults.headers.common.Authorization);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const logOut = createAsyncThunk('logout/auth', async (_, thunkAPI) => {
  try {
    const { data } = await configAxios.post('auth/logout');

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'refresh/auth',
  async (sid, thunkAPI) => {
    console.log(sid);
    try {
      const response = await configAxios.post('auth/refresh', sid);

      console.log(response);

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
