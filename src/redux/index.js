import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/user-slice';

const store = configureStore({
  reducer: { userSlice: userReducer },
});

export default store;
