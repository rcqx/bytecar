import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => (
  <div className="mx-auto">
    <div className="absolute z-10 bg-none">
      <Navbar />
    </div>
    <div className="z-0">
      <Outlet />
    </div>
  </div>
);

export default Layout;
