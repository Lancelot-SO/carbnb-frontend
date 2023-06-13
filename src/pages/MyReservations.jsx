import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { viewMyReservations } from '../redux/Actions/reservation-actions';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservationSlice.Reservations);

  useEffect(() => {
    dispatch(viewMyReservations());
    // Fetch reservations for the specific user
  }, [dispatch]);

  return (
    <div className="container py-4">
      <h1 className="mb-4">My Reservations</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Car ID</th>
            <th>Date</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {reservations && reservations.length > 0 ? (
            reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.carId}</td>
                <td>{reservation.date}</td>
                <td>{reservation.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No reservations found.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default MyReservations;
