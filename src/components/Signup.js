import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const URL = 'http://localhost:3000/signup';

  const userSubmit = async (e) => {
    e.preventDefault();
    axios.post(URL, JSON.stringify({
      user: {
        name: userName,
        password: userPassword,
      },
    }))
      .then((response) => {
        if (response.status === 201) {
          window.location.href = '/api/v1/cars';
        }
      });
  };

  return (
    <div className="signup-page">
      <div>Sign-Up</div>
      <form onSubmit={userSubmit}>
        <input onChange={(e) => setUserName(e.target.value)} className="signInput" type="text" placeholder="username" required />
        <input onChange={(e) => setUserPassword(e.target.value)} className="signInput" type="text" placeholder="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignUp;
