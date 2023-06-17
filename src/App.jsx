import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
import HomePage from './pages/HomePage';
import SampleForm from './components/form_structure/form';
import Register from './components/Login/Register';
// eslint-disable-next-line import/no-duplicates
import Navbar from './components/navbar/Navbar';
import AddCar from './components/Cars/add-car';
import AddReservation from './components/Reservations/add-reservations';
import MyReservations from './pages/MyReservations';
import DeletePage from './pages/DeletePage';
import CarDetails from './pages/CarDetails';

function App() {
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
      <Route path="/form" element={<SampleForm />} />
    </Routes>

  );
}

export default App;
