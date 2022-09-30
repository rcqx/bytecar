import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/users/users';

const Login = () => {
  const [userName, setUsername] = useState('');
  const dispatch = useDispatch();

  const userSubmit = (e) => {
    e.preventDefault();
    if (userName.length > 3) {
      dispatch(loginUser(userName));
    }
  };

  return (
    <div className="signup-page">
      <form onSubmit={userSubmit}>
        <input onChange={(e) => setUsername(e.target.value)} className="signInput" type="text" placeholder="username" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Not registered? &nbsp;
        <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
