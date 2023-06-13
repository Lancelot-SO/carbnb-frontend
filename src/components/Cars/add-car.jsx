import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import './add-car.css';
import { useSelector } from 'react-redux';
import { createNewCar } from '../../redux/Actions/singleCar-actions';
// import { createCar } from '../redux/motorcycles/motorcycles';

const AddCar = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [modelYear, setModelYear] = useState(0);
  const userId = useSelector((state) => state.userSlice.user.id);

  //   const createNewCar = (name) => ({
  //     name,
  //     description,
  //     imageUrl,
  //     price,
  //     modelYear,
  //     engineType,
  //     fuelType,
  //   });

  //   const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewCar(userId, name, modelYear, description, price, imageUrl);

    setName('');
    setDescription('');
    setImageUrl('');
    setPrice(0);
    setModelYear(0);
    setTimeout(() => {
      window.location.href = '/';
    }, 300);
  };

  return (
    <div className="form-container">
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" name="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Description" type="text" name="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input placeholder="Image URL" type="url" name="ImageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        <label htmlFor="price">Price</label>
        <input id="price" placeholder="Price" type="number" name="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <label htmlFor="year">Model year</label>
        <input id="year" placeholder="Model year" type="number" name="Year" value={modelYear} onChange={(e) => setModelYear(e.target.value)} required />
        <div className="btn-group">
          <button type="submit">Add Car</button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
