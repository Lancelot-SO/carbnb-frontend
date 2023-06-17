import { createSlice } from '@reduxjs/toolkit';
import { createReservation, viewReservations } from '../Actions/reservation-actions';

export const reservationSlice = createSlice({
  name: 'Reservations',
  initialState: [],
  extraReducers(builder) {
    builder
      .addCase(viewReservations.fulfilled, (state, { payload }) => {
        state.push(payload);
      })
      .addCase(createReservation.fulfilled, (state, { payload }) => {
        state.push(payload);
      });
  },
});

const { reducer } = reservationSlice;

export default reducer;
