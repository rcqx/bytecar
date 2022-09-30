import axios from 'axios';

export const logout = () => {
  localStorage.removeItem('user');
  if (localStorage.getItem('user') == null) {
    return true;
  }
  return false;
};

export const login = async (userName) => {
  const request = await axios.post('http://localhost:3000/api/v1/sessions', {
    username: userName,
  });
  const response = request.data;
  if (response) {
    localStorage.setItem('user', JSON.stringify(response));
  }
  return response;
};

export const signup = async (userName) => {
  const request = await axios.post('http://localhost:3000/api/v1/users', {
    username: userName,
  });
  const response = request.data;
  if (response) {
    localStorage.setItem('user', JSON.stringify(response));
  }
  return response;
};