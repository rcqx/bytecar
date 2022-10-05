import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Navbar from './components/Navbar';

const Layout = () => {
  const [Desktop, setNavbar] = useState(false);

  const showNavbar = () => setNavbar(!Desktop);

  return (
    <div className="mx-auto">
      <div className="absolute z-10 bg-none">
        <div className="absolute z-20">
          <FaIcons.FaBars className={Desktop ? 'hidden' : 'mx-0 text-4xl bg-none text-blue-900'} onClick={showNavbar} />
          <AiIcons.AiOutlineClose className={Desktop ? 'text-2xl self-start mt-0 absolute text-white' : 'hidden'} onClick={showNavbar} />
        </div>
        <div className={Desktop ? ' z-10' : 'hidden z-0'}>
          <Navbar />
        </div>
      </div>
      <div className="z-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
