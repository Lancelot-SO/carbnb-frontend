import { reservationActions } from '../Slices/reservation-slice';

export const createReservation = async (userId, carId, date, city) => {
  const response = await fetch(`http://127.0.0.1:3000/api/v1/reservation/${userId}/${carId}/${city}/${date}`, {
    method: 'POST',
  });
  const data = await response.json();
  console.log(data);
};

export const viewMyReservations = (userId) => async (dispatch) => {
  const response = await fetch(`http://127.0.0.1:3000/api/v1/reservation/${userId}`);
  const data = await response.json();
  console.log(data);

  const { reservations } = data;

  dispatch(reservationActions.allReservations(reservations));
};
