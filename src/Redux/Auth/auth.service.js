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
<<<<<<< HEAD
=======
    // console.log(sid);
>>>>>>> b71e0898b11caed1b8a77847e5ccc68cfc6953ad
    try {
      const state = thunkAPI.getState();

<<<<<<< HEAD
      const persistedToken = state.auth.refreshToken;
=======
      // console.log(response);
>>>>>>> b71e0898b11caed1b8a77847e5ccc68cfc6953ad

      token.set(persistedToken);

      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }

      const { data } = await configAxios.post('auth/refresh', sid);

      token.set(data.newAccessToken);

      return data;
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
