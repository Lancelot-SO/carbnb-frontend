import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/user-slice';
import usersReducer from './Slices/users-slice';
import carReducer from './Slices/car-slice';
import singleCarReducer from './Slices/singleCar-slice';
import reservationReducer from './Slices/reservation-slice';
import carDetailsSliceReducer from './Slices/carDetails-slice';
import registerReducer from './Slices/register-slice';

const store = configureStore({
  reducer: {
    userSlice: userReducer,
    usersSlice: usersReducer,
    carSlice: carReducer,
    carDetailsSlice: carDetailsSliceReducer,
    singleCarSlice: singleCarReducer,
    reservationSlice: reservationReducer,
    registerSlice: registerReducer,
  },
});

export default store;
