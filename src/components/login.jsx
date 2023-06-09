import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../redux/users/users';

const Login = () => {
  const [username, setUserName] = useState('');

  // to be changed based on a later state of the redux actions and reducers
  const dispatch = useDispatch();
  const error = useSelector((state) => state?.user.status);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginUser(username));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(username));
  };

  return (
    <div className="form-container-login">
      <form onSubmit={handleLogin}>
        <div className="login-logo" />
        <input onChange={(e) => setUserName(e.target.value)} type="username" name="username" value={username} id="username" placeholder="Username:" required />
        <input className="login-btn" type="submit" value="Login" />
      </form>
      <p>Don&apos;t have account?</p>
      <a onClick={handleRegister} href="/signup" alt="create new account" className="font-bold sign-up">Sign up</a>
      <p id="message">
        {' '}
        {error && <p>{error}</p>}
      </p>
    </div>
  );
};

export default Login;
