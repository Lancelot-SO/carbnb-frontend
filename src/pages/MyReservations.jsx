import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { viewReservations } from '../redux/Actions/reservation-actions';
import { fetchUsers } from '../redux/Actions/user-actions';
import { fetchcars } from '../redux/Actions/car-actions';
import Reserve from '../components/Reservations/reserve';

const MyReservations = () => {
  const dispatch = useDispatch();
  // const [reservedCar, setReservedCar] = useState({});
  const reservedCars = [];

  useEffect(() => {
    dispatch(viewReservations());
    dispatch(fetchUsers());
    dispatch(fetchcars());
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservationSlice[0]?.reservations);
  const users = useSelector((state) => state.userSlice.users[0]);
  const user = users?.find((user) => user.username === JSON.parse(localStorage.getItem('user'))) || 0;
  const userReservations = reservations?.filter(reservation => reservation.user_id === user?.id);

  return (
    <div className="container py-4">
      <h1 className="mb-4">My Reservations</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Date</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {userReservations && userReservations?.length > 0 ? (
            userReservations.map((reserve) => (
              <Reserve key={reserve.id} reserve={reserve} />
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
