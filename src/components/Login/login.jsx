import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/Actions/user-actions';

const Login = () => {
  const [username, setUserName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(fetchUser(username));
    setLoggedIn(localStorage.getItem('user') !== null);
  };

  return (
    <div className="form-container-login">
      <form onSubmit={handleLogin}>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="username"
          name="username"
          value={username}
          id="username"
          placeholder="Username:"
          required
        />
        <input className="login-btn" type="submit" value="Login" />
      </form>
      <p>Don&apos;t have an account?</p>
      <Link to="/register">Sign in</Link>
    </div>
  );
};

export default Login;
