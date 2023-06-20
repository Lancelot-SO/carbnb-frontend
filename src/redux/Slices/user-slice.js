import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../Actions/user-actions';

const userSlice = createSlice({
  name: 'User',
  initialState: {
    user: {},
    loggedIn: false,
    users: [],
    status: '',
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.rejected, (state, { payload }) => ({
        ...state,
        status: payload,
      }))

      .addCase(fetchUser.fulfilled, (state, { payload }) => ({
        ...state,
        user: payload,
        status: 'Accepted',
      }));
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
