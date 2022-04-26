import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar w-full bg-navbar border-b-2 px-5 py-3 fixed">
      <div className="container mx-auto flex justify-between px-5 py-1">
        <div className="logo">
          <p>LOGO</p>
        </div>
        <div className="navigasi ">
          <ul className="flex gap-x-3 text-lg ">
            <li className="px-2 ">
              <Link to="/" className="link-navbar">
                Home
              </Link>
            </li>
            <li className="px-3">
              <Link to="/" className="link-navbar">
                About
              </Link>
            </li>
            <li className="px-3">
              <Link to="/" className="link-navbar">
                Skill
              </Link>
            </li>
            <li className="px-3">
              <Link to="/" className="link-navbar">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
