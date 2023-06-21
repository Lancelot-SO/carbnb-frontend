import { singleCarActions } from '../Slices/singleCar-slice';

export const fetchSingleCar = (id) => async (dispatch) => {
  const response = await fetch(`http://127.0.0.1:3000/api/v1/car/${id}`);
  const data = await response.json();

  const { car } = data;
  dispatch(singleCarActions.singleCar(car));
};

export const createNewCar = async (
  userId,
  name,
  model,
  description,
  price,
  image,
) => {
  await fetch(
    'http://127.0.0.1:3000/api/v1/car',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        userId,
        name,
        model,
        description,
        price,
        image,
      }),
    },
  );
};

export const deleteCar = async (id) => {
  await fetch(`http://127.0.0.1:3000/api/v1/car/${id}`, {
    method: 'DELETE',
  });
};
