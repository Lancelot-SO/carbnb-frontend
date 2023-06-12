import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from '../components/Home/Home';
import { fetchcars } from '../redux/Actions/car-actions';
import Navbar from '../components/navbar/Navbar';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcars());
  }, [dispatch]);
  return (

    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default HomePage;
