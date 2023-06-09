import { userActions } from '../Slices/user-slice';

export const fetchUser = (username) => async (dispatch) => {
  const response = await fetch(`http://127.0.0.1:3000/api/v1/login/:${username}`);
  const data = await response.json();
  console.log(data);

  const { user } = data;
  const loggedIn = data.logged_in;

  const person = {
    name: user.name,
    username: user.username,
    id: user.id,
    loggedIn,
  };

  dispatch(userActions.loginUser(person));
};

export const registerUser = (name, username) => async (dispatch) => {
  const response = await fetch(`http://127.0.0.1:3000/api/v1/register/:${username}/:${name}`, {
    method: 'POST',
  });
  const data = await response.json();
  console.log(data);

  const { user } = data;
  const loggedIn = data.logged_in;

  const person = {
    name: user.name,
    username: user.username,
    id: user.id,
    loggedIn,
  };

  dispatch(userActions.loginUser(person));
};
