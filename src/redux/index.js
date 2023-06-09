import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/user-slice';
import carReducer from './Slices/car-slice';
import singleCarReducer from './Slices/singleCar-slice';
import reservationReducer from './Slices/reservation-slice';

const store = configureStore({
  reducer: {
    userSlice: userReducer,
    carSlice: carReducer,
    singleCarSlice: singleCarReducer,
    reservationSlice: reservationReducer,
  },
});

export default store;
