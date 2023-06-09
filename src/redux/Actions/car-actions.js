import { carActions } from '../Slices/car-slice';

export const fetchcars = () => async (dispatch) => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/cars');
  const data = await response.json();
  console.log(data);

  const { cars } = data;
  dispatch(carActions.allCars(cars));
};

export const fetchUserCars = (id) => async (dispatch) => {
  const response = await fetch(`http://127.0.0.1:3000/api/v1/cars/${id}`);
  const data = await response.json();
  console.log(data);

  const { cars } = data;
  dispatch(carActions.allCars(cars));
};
