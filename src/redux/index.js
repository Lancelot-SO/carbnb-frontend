import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/user-slice';
import carReducer from './Slices/car-slice';

const store = configureStore({
  reducer: { userSlice: userReducer, carSlice: carReducer },
});

export default store;
