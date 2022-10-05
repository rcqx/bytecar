import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as TbIcons from 'react-icons/tb';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './navbar.css';

const links = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text active',
  },
  {
    id: 2,
    title: 'Cars',
    path: '/cars',
    icon: <AiIcons.AiFillCar />,
    cName: 'nav-text',
  },
  {
    id: 3,
    title: 'Add car',
    path: '/add_car',
    icon: <MdIcons.MdAddCircleOutline />,
    cName: 'nav-text',
  },
  {
    id: 4,
    title: 'Test drive',
    path: '/reserve',
    icon: <TbIcons.TbSteeringWheel />,
    cName: 'nav-text',
  },
  {
    id: 5,
    title: 'Reservations',
    path: '/reservations',
    icon: <BsIcons.BsFillCalendarCheckFill />,
    cName: 'nav-text',
  },
  {
    id: 6,
    title: 'Remove car',
    path: '/remove_car',
    icon: <MdIcons.MdRemoveCircleOutline />,
    cName: 'nav-text',
  },
];

function Navbar() {
  const [Desktop, setNavbar] = useState(false);

  const showNavbar = () => setNavbar(!Desktop);

  return (
    <>
      <div>
        <FaIcons.FaBars className="mx-0 text-4xl bg-none text-blue-900" onClick={showNavbar} />
      </div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={Desktop ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <li className="nav-color flex flex-row h-36 items-center">
              <AiIcons.AiOutlineClose onClick={showNavbar} className="text-xl self-start mt-0 absolute" />
              <MdIcons.MdOutlineElectricCar className="text-7xl mx-auto" />
            </li>
            {links.map((link) => (
              <li
                key={link.id}
                className={link.cName}
              >
                <Link to={link.path} className="active">
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
