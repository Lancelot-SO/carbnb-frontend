import { createSlice } from '@reduxjs/toolkit';

const singleCarSlice = createSlice({
  name: 'Car',
  initialState: {
    Car: {},
  },
  reducers: {
    singleCar(state, actions) {
      // eslint-disable-next-line no-param-reassign
      state.Car = actions.payload;
    },
  },
});

export const singleCarActions = singleCarSlice.actions;

export default singleCarSlice.reducer;
