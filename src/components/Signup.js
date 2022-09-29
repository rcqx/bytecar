import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signupUser } from '../redux/users/users';

const SignUp = () => {
  const [userName, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSubmit = (e) => {
    e.preventDefault();
    if (userName.length > 3) {
      dispatch(signupUser(userName));
      setUsername();
      navigate('/login');
    }
  };

  return (
    <div className="signup-page">
      <form onSubmit={userSubmit}>
        <input onChange={(e) => setUsername(e.target.value)} className="signInput" type="text" placeholder="username" required />
        <button type="submit">SignUp</button>
      </form>
      <p>
        Already have an account? &nbsp;
        <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
