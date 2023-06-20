import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Login } from '../../config';

export const fetchUsers = createAsyncThunk(
  'users/allUsers',
  async () => {
    try {
      const res = await axios.get('http://127.0.0.1:3000/api/v1/users/index');
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const fetchUser = createAsyncThunk(
  'users/getCurrentUser',
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/v1/login/${username}`);
      Login(username);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const registerUser = createAsyncThunk('users/registerCurrentUser',
  async ({ name, username }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/v1/register', {
        name,
        username,
      });
      Login(username);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  });
