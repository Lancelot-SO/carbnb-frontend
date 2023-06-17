import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createReservation = createAsyncThunk(
  'reservations/createReservations',
  async (reservation) => {
    const {
      userId, carId, city, date,
    } = reservation;
    try {
      axios.post(
        'http://127.0.0.1:3000/api/v1/reservation',
        {
          user_id: userId,
          car_id: carId,
          city,
          date,
        },
      );
      return reservation;
    } catch (err) {
      return err.message;
    }
  },
);

export const viewReservations = createAsyncThunk(
  'reservations/viewMyReservations',
  async () => {
    const res = await axios.get('http://127.0.0.1:3000/api/v1/reservations/');
    return res.data;
  },
);
