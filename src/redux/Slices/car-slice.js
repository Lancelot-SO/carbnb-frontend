import { createSlice } from '@reduxjs/toolkit';
import { fetchUserCars, fetchcars } from '../Actions/car-actions';

export const carSlice = createSlice({
  name: 'cars',
  initialState: [],
  reducers: {
    clearCars: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.length = 0;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchcars.fulfilled, (_state, action) => {
        const ids = Object.keys(action.payload);
        const newState = ids.map((id) => ({
          id: action.payload[id].id,
          user: action.payload[id].user_id,
          name: action.payload[id].name,
          description: action.payload[id].description,
          imageUrl: action.payload[id].image,
          price: action.payload[id].price,
          model: action.payload[id].model,
        }));
        return newState;
      })
      .addCase(fetchUserCars.fulfilled, (state, { payload }) => {
        state.push(payload);
      });
  },
});

const { reducer } = carSlice;
export const { clearCars } = carSlice.actions;

export default reducer;
