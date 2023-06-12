import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/Actions/user-actions';
import { fetchcars } from '../../redux/Actions/car-actions';
import { createReservation } from '../../redux/Actions/reservation-actions';

const AddReservation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedCarId = location.state?.id;

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const [date, setDate] = useState(undefined);
  const [city, setCity] = useState('');
  const [carId, setCarId] = useState(selectedCarId || '');
  const [user, setUser] = useState('');
  const [notice, setNotice] = useState('');

  const users = useSelector((state) => state.users);

  useEffect(() => {
    setUser(users?.find((user) => user.name === JSON.parse(localStorage.getItem('username'))) || 0);
  }, [users]);

  const [options, setOptions] = useState([]);
  const carOptions = [];

  const createNewReservation = (userId, carId, date, city) => ({
    userId,
    carId,
    date,
    city,
  });

  const cars = useSelector((state) => state.cars);
  if (carId === '') {
    cars.forEach((car) => {
      carOptions.push(car);
    });
  }

  useEffect(() => {
    if (carId === '') {
      // dispatch(clearCars());
      dispatch(fetchcars());
    }
  }, [dispatch, carId]);

  useEffect(() => {
    setOptions(carOptions);
  }, [cars]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (carId === '') {
      setNotice('Error trying to submit request. Please try again.');
    } else {
      const reservation = createNewReservation(user.id, carId, date, city);
      dispatch(createReservation(reservation));
      setDate(null);
      setCity('');
      setTimeout(() => {
        window.location.href = '/';
      }, 200);
    }
  };

  return (
    <div className="reservation-form">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="reservations-form">
          {options && options.length > 0
            ? (
              <select value={carId} onChange={(e) => setCarId(e.target.value)}>
                <option value="" className="default-dropdown" disabled>Select a car to reserve</option>
                {options && options.map((option) => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            )
            : (
              <select disabled value={carId}>
                <option value={carId}>{location.state?.name}</option>
              </select>
            )}
          <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <input placeholder="City" type="text" name="City" value={city} onChange={(e) => setCity(e.target.value)} required />
          <div className="error-message">
            <p id="message">{notice}</p>
          </div>
          <div className="btn-group">
            <button type="submit" name="Submit Reservation">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddReservation;
