import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './add-car.css';
import { addCar } from '../../redux/Actions/car-actions';

const AddCar = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [model, setModel] = useState('');

  const createNewCar = (name) => ({
    user,
    name,
    description,
    imageUrl,
    price,
    model,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const car = createNewCar(
      user,
      name,
      description,
      imageUrl,
      price,
      model
    );
    dispatch(addCar(car));
    setName('');
    setDescription('');
    setImageUrl('');
    setPrice(0);
    setModel('');
    setTimeout(() => {
      window.location.href = '/';
    }, 300);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" name="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Description" type="text" name="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input placeholder="Image URL" type="url" name="ImageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        <input id="model" placeholder="Model" type="text" name="Model" value={model} onChange={(e) => setModel(e.target.value)} required />
        <label htmlFor="price">Price</label>
        <input id="price" placeholder="Price" type="number" name="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <label htmlFor="year">Model</label>
        <div className="btn-group">
          <button type="submit">Add Car</button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
