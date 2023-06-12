import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/form" element={<SampleForm />} />
    </Routes>

  );
}

export default App;
