import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/Actions/user-actions';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, username));
  };

  return (
    <div className="form-container-login">
      <form onSubmit={handleRegister}>
        <input onChange={(e) => setName(e.target.value)} type="name" name="name" value={name} id="name" placeholder="Name:" required />
        <input onChange={(e) => setUserName(e.target.value)} type="username" name="username" value={username} id="username" placeholder="Username:" required />
        <input className="login-btn" type="submit" value="Sign up" />
      </form>
      <p>
        Already have account
        <span><Link to="/login"> Login </Link></span>
      </p>
      <p id="message">
        {' '}
      </p>
    </div>
  );
};

export default Register;
