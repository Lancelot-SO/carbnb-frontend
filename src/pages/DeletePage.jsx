import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { deleteCar } from '../redux/Actions/singleCar-actions';
import { fetchcars } from '../redux/Actions/car-actions';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeletePage = () => {
  const [deleted, setDeleted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcars());
    setDeleted(false);
  }, [dispatch, deleted]);
  const cars = useSelector((state) => state.carSlice);

  const handleDelete = (id) => {
    deleteCar(id);
    setDeleted(true);
  };

  return (
    <div>
      <h1>Delete Page</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.name}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(car.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

  );
};

export default DeletePage;
