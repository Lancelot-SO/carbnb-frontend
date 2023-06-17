import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './add-car.css';
import { addCar } from '../../redux/Actions/car-actions';
import { fetchUsers } from '../../redux/Actions/user-actions';

const AddCar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.usersSlice.users[0]);

  useEffect(() => {
    setUser(users?.find((user) => user.username === JSON.parse(localStorage.getItem('user'))) || 0);
  }, [users]);

  console.log(user);

  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [model, setModel] = useState('');

  const createNewCar = (user, name, description, imageUrl, price, model) => ({
    user,
    name,
    description,
    imageUrl,
    price,
    model,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const car = createNewCar(
      user.id,
      name,
      description,
      imageUrl,
      price,
      model,
    );
    dispatch(addCar(car));
    setName('');
    setDescription('');
    setImageUrl('');
    setPrice(0);
    setModel('');
  };

  return (
    <div className="form-container">
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" name="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Description" type="text" name="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input placeholder="Image URL" type="url" name="ImageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        <input id="model" placeholder="Model" type="text" name="Model" value={model} onChange={(e) => setModel(e.target.value)} required />
        <label htmlFor="price">Price</label>
        <input id="price" placeholder="Price" type="number" name="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <div className="btn-group">
          <button type="submit">Add Car</button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
