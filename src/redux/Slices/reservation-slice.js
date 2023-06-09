import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
  name: 'Reservations',
  initialState: {
    Reservations: [],
  },
  reducers: {
    allReservations(state, actions) {
      // eslint-disable-next-line no-param-reassign
      state.Reservations = actions.payload;
    },
  },
});

export const reservationActions = reservationSlice.actions;

export default reservationSlice.reducer;
