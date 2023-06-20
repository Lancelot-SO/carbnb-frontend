import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from '../Slices/user-slice';
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

export const fetchUser = (username) => async (dispatch) => {
  const response = await fetch(`http://127.0.0.1:3000/api/v1/login/${username}`);
  const data = await response.json();
  console.log(data);

  Login(username);

  const { user } = data;
  const loggedIn = data.logged_in;

  const person = {
    name: user.name,
    username: user.username,
    id: user.id,
    loggedIn,
  };

  dispatch(userActions.loginUser(person));
};

export const registerUser = (name, username) => async (dispatch) => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      username,
      name,
    }),
  });
  const data = await response.json();

  const { user } = data;
  const loggedIn = data.logged_in;

  const person = {
    name: user.name,
    username: user.username,
    id: user.id,
    loggedIn,
  };

  dispatch(userActions.loginUser(person));
};
