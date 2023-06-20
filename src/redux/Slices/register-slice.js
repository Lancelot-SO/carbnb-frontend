import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../Actions/user-actions';

const registerSlice = createSlice({
  name: 'User',
  initialState: {
    user: {},
    loggedIn: false,
    users: [],
    status: '',
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.rejected, (state, { payload }) => ({
        ...state,
        status: payload,
      }))

      .addCase(registerUser.fulfilled, (state, { payload }) => ({
        ...state,
        state: payload,
        status: 'Accepted',
      }));
  },
});

export const userActions = registerSlice.actions;

export default registerSlice.reducer;
