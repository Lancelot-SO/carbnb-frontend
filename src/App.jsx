import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
import HomePage from './pages/HomePage';
import Register from './components/Login/Register';
import Navbar from './components/navbar/Navbar';
import AddCar from './components/Cars/add-car';
import AddReservation from './components/Reservations/add-reservations';
import MyReservations from './pages/MyReservations';
import DeletePage from './pages/DeletePage';
import CarDetails from './pages/CarDetails';
import { useEffect } from 'react';

function App() {
  const isLoggedIn = JSON.parse(localStorage.getItem('user'))?.length > 0 || false;

  useEffect(() => {
    if (!isLoggedIn && window.location.pathname !== '/login' && window.location.pathname !== '/register') {
      window.location = '/login';
    }
  }, []);
  
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <>
            <div className="homepage-container">
              <div className="navbar-container">
                <Navbar />
              </div>
              <div className="home-container">
                <HomePage />
              </div>
            </div>
          </>
          )}
      />
      <Route
        path="/cars/:id"
        element={(
          <>
            <div className="details-container-wrap">
              <div className="navbar-container">
                <Navbar />
              </div>
              <CarDetails />
            </div>
          </>
      )}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/addCar"
        element={(
          <div className="homepage-container">
            <div className="navbar-container">
              <Navbar />
            </div>
            <div className="home-container">
              <AddCar />
            </div>
          </div>
)}
      />
      <Route
        path="/reservations"
        element={(
          <div className="homepage-container">
            <div className="navbar-container">
              <Navbar />
            </div>
            <div className="home-container">
              <MyReservations />
            </div>
          </div>
)}
      />
      <Route
        path="/reserve"
        element={(
          <div className="homepage-container">
            <div className="navbar-container">
              <Navbar />
            </div>
            <div className="home-container">
              <AddReservation />
            </div>
          </div>
)}
      />
      <Route
        path="/delete"
        element={(
          <div className="homepage-container">
            <div className="navbar-container">
              <Navbar />
            </div>
            <div className="home-container">
              <DeletePage />
            </div>
          </div>
)}
      />
    </Routes>

  );
}

export default App;
