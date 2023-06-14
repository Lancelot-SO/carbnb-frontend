const Login = (username) => {
  localStorage.setItem('user', JSON.stringify(username));
};

const Logout = () => {
  localStorage.removeItem('user');
};

export { Login, Logout };
