import { createSlice } from '@reduxjs/toolkit';
import { fetchUserCars } from '../Actions/car-actions';

export const carDetailsSlice = createSlice({
  name: 'car-details',
  initialState: [],
  reducers: {
    resetState: (state) => {
      state.splice(0, state.length);
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserCars.fulfilled, (state, { payload }) => {
        state.push(payload);
      });
  },
});

export const { resetState } = carDetailsSlice.actions;
const { reducer } = carDetailsSlice;

export default reducer;
