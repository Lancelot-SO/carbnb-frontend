import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'User',
  initialState: {
    user: {},
    loggedIn: false,
    users: [],
  },
  reducers: {
    loginUser(state, actions) {
      // eslint-disable-next-line no-param-reassign
      state.user = actions.payload;
      // eslint-disable-next-line no-param-reassign
      state.loggedIn = actions.payload.loggedIn;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
