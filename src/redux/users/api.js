import axios from 'axios';

export const logout = async (userName) => {
  const res = await axios.post(URL, {
    username: userName,
  });
  return res.json();
};

export const login = async (userName) => {
  const res = await axios.post('http://localhost:3000/api/v1/sessions', {
    username: userName,
  });
  return res.json();
};

export const signup = async (userName) => {
  const res = await axios.post('http://localhost:3000/api/v1/users', {
    username: userName,
  });
  return res.json();
};
