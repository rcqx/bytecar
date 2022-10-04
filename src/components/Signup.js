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
    <div>

      <div className="fixed flex inset-0 z-10 bg-gray-500 bg-opacity-75">
        <div className="flex self-center items-center justify-center w-full h-full p-8 max-h-96">
          <div className="flex flex-col overflow-hidden bg-white rounded w-full max-h-full max-w-md">

            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/">close</Link>
            </div>

            <div className="relative p-4 my-10">
              <div className="space-y-4">
                <form onSubmit={userSubmit} className="flex items-center justify-between">
                  <input onChange={(e) => setUsername(e.target.value)} className="signInput" type="text" placeholder="username" required />
                  <button type="submit" className="border font-bold py-2 px-4 rounded">signup</button>
                </form>
              </div>
            </div>

            <div className="signup-page justify-center h-fit flex items-center p-4 border-t">
              <p className="border font-bold py-2 px-4 rounded">
                Already have an account? &nbsp;
                <Link to="/login">Login</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
