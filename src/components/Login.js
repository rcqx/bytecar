import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from '../redux/users/users';

const Login = () => {
  const [userName, setUsername] = useState('');
  const dispatch = useDispatch();

  const userSubmit = (e) => {
    e.preventDefault();
    if (userName.length > 3) {
      dispatch(loginUser(userName));
      Navigate('/');
    }
  };

  return (
    <div className="signup-page">
      <form onSubmit={userSubmit}>
        <input onChange={(e) => setUsername(e.target.value)} className="signInput" type="text" placeholder="username" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
