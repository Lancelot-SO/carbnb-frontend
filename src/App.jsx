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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addCar" element={<AddCar />} />
      <Route path="/reserve" element={<AddReservation />} />
      <Route path="/form" element={<SampleForm />} />
    </Routes>

  );
}

export default App;
