import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logoutUser } from '../redux/users/users';

const Logout = () => {
  const [userName, setUsername] = useState('');
  const dispatch = useDispatch();

  const userSubmit = (e) => {
    e.preventDefault();
    if (userName.length > 3) {
      dispatch(logoutUser(userName));
      Navigate('/login')
    }
  };

  return (
    <div className="signup-page">
      <form onSubmit={userSubmit}>
        <input onChange={(e) => setUsername(e.target.value)} className="signInput" type="text" placeholder="username" required />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default Logout;
