import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import Register from './components/Login/Register';

function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>

  );
}

export default App;
