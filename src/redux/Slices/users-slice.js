import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../Actions/user-actions';

const userSlice = createSlice({
  name: 'User',
  initialState: {
    users: [],
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users.push(payload);
      });
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
