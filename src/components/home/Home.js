import React from 'react';
import photoSection2 from '../../img/p2.png';
import './home.css';
import { Link } from 'react-router-dom';
import { MdExplore } from 'react-icons/md';

const Home = () => {
  return (
    <div className="home">
      <div className="container h-screen flex items-end ">
        <div className="section">
          <div className="section1 px-5 flex-col ">
            <h3 className="text-5xl">Welcome To My Page</h3>
            <h3 className="text-4xl">My Name is Farhan</h3>
            <h3 className="text-3xl">And I'm Fullstack Web Deb</h3>
            <Link
              to="/"
              className="flex items-center mt-3 py-2 px-5 bg-button rounded-lg hover:bg-hover ease-in duration-200 "
            >
              <MdExplore /> <p>EXPLORE</p>
            </Link>
          </div>
          <div className="section2">
            <img src={photoSection2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
