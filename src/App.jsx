import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
// import HomePage from './pages/HomePage';
import SampleForm from './components/form_structure/form';
import Home from './components/Home/Home';
import Register from './components/Login/Register';
// eslint-disable-next-line import/no-duplicates
import Navbar from './components/navbar/Navbar';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/form" element={<SampleForm />} />
    </Routes>

  );
}

export default App;
