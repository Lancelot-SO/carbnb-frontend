import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Reserve = ({
  reserve,
}) => {
  const cars = useSelector((state) => state.carSlice);
  const reservedCar = cars.find((car) => car.id === reserve.car_id);

  if (reservedCar) {
    const parsedDate = new Date(reserve.date);
    const formattedDate = parsedDate.toLocaleDateString();
    return (
      <>
        <tr key={reserve.id}>
          <td>
            {reservedCar.model}
            {' '}
            {reservedCar.name}
          </td>
          <td>{formattedDate}</td>
          <td>{reserve.city}</td>
        </tr>
      </>
    );
  }
  return (
    <div />
  );
};

Reserve.propTypes = { reserve: PropTypes.shape({}).isRequired };

export default Reserve;
