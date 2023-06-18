import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/Actions/user-actions';
import './Login.css';

const Login = () => {
  const [username, setUserName] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(fetchUser(username));
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
