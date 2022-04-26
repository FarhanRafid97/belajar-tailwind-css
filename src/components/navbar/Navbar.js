import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { MdDarkMode } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsSun } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const togleMobileNav = () => setMobileNav(!mobileNav);
  const toggleDark = () => setDark(!dark);
  const darkMode = () => {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    toggleDark();
    console.log(html);
  };

  return (
    <div className="navbar w-full bg-gray-100 border-b-2 px-5 py-3 fixed  fixed dark:bg-gray-800 dark:text-white ease-in duration-200">
      <div
        className={
          mobileNav ? 'navbarMobile active dark:bg-gray-800' : 'navbarMobile'
        }
      >
        <div>
          <ImCross
            class={mobileNav ? 'exitButton active' : 'exitButton'}
            onClick={togleMobileNav}
          />
        </div>
        <div class="mobileNavigasi">
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
        </div>
      </div>

      <div className="container mx-auto flex justify-between px-5 py-1 items-center">
        <div className="logo">
          <p>LOGO</p>
        </div>
        <div className="navigasi  ">
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
            <div className="hamburger" onClick={togleMobileNav}>
              <GiHamburgerMenu />
            </div>
            <button onClick={darkMode}>
              {dark ? <MdDarkMode /> : <BsSun />}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
