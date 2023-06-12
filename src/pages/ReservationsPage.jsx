import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { viewMyReservations } from '../redux/Actions/reservation-actions';
import { deleteCar } from '../redux/Actions/singleCar-actions';

const ReservationsPage = () => {
  const userId = useSelector((state) => state.userSlice.userId);
  const reservations = useSelector((state) => state.reservationSlice.Reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewMyReservations(userId));
  }, [dispatch, userId]);

  const handleDelete = (reservationId) => {
    dispatch(deleteCar(reservationId));
  };

  return (
    <div>
      <h2>My Reservations</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Car Brand</th>
            <th>Date of Reservation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the reservations and render table rows */}
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td><img src={reservation.car.photo} alt="Car" /></td>
              <td>{reservation.car.brand}</td>
              <td>{reservation.date}</td>
              <td>
                <button type="button" onClick={() => handleDelete(reservation.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReservationsPage;
