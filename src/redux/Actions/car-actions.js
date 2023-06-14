import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchcars = createAsyncThunk(
  'cars/fetchcars',
  async () => {
    try {
      const res = await axios.get('http://127.0.0.1:3000/api/v1/cars');
      return res.data.cars;
    } catch (err) {
      return err.message;
    }
  },
);

export const fetchUserCars = createAsyncThunk(
  'cars/fetchcars',
  async (id) => {
    try {
      const res = await axios.get(`http://127.0.0.1:3000/api/v1/cars/${id}`);
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const addCar = createAsyncThunk(
  'cars/addcars',
  async (car) => {
    const {
      user, name, description, imageUrl, price, model
    } = car;
    try {
      await axios.post(
        'http://127.0.0.1:3000/api/v1/cars/',
        {
          car: {
            user,
            name,
            description,
            image: imageUrl,
            price,
            model,
          },
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      return car;
    } catch (err) {
      return err.message;
    }
  },
);