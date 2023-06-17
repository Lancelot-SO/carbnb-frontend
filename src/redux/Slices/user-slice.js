import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../Actions/user-actions';
const userSlice = createSlice({
  name: 'User',
  initialState: {
    user: {},
    loggedIn: false,
    users: []
  },
  reducers: {
    loginUser(state, actions) {
      // eslint-disable-next-line no-param-reassign
      state.user = actions.payload;
      // eslint-disable-next-line no-param-reassign
      state.loggedIn = actions.payload.loggedIn;
    },
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
