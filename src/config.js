const Login = (username) => {
  localStorage.setItem('user', JSON.stringify(username.toLowerCase()));
  window.location.href = '/';
};

const Logout = () => {
  localStorage.removeItem('user');
  window.location.href = '/login';
};

export { Login, Logout };
