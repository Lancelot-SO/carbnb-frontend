import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser, registerUser } from '../redux/users/users';

const Login = () => {
  const [username, setUserName] = useState('');

  // to be changed based on a later state of the redux actions and reducers
  // const dispatch = useDispatch();
  // const error = useSelector((state) => state?.user.status);

  const handleLogin = (e) => {
    e.preventDefault();

    // dispatch
    // loginUser(username);
  };

  // const handleRegister = (e) => {
  // e.preventDefault();
  // dispatch
  // registerUser(username);
  // };

  return (
    <div className="form-container-login">
      <form onSubmit={handleLogin}>
        <input onChange={(e) => setUserName(e.target.value)} type="username" name="username" value={username} id="username" placeholder="Username:" required />
        <input className="login-btn" type="submit" value="Login" />
      </form>
      <p>Don&apos;t have account?</p>
      <Link to="/register">Sign in</Link>
    </div>
  );
};

export default Login;
