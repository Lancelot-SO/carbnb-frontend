import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'Cars',
  initialState: {
    cars: [],
  },
  reducers: {
    allCars(state, actions) {
      // eslint-disable-next-line no-param-reassign
      state.cars = actions.payload;
    },
  },
});

export const carActions = carSlice.actions;

export default carSlice.reducer;
