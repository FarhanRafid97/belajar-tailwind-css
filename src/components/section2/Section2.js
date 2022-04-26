import React, { useEffect } from 'react';
import './section2.css';
import { Link } from 'react-router-dom';
import { MdExplore } from 'react-icons/md';
import { dataContent } from './content';

const Section2 = () => {
  var width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  useEffect(() => {
    console.log(width > 600);
  }, [width]);

  return (
    <div class="section2 dark:bg-gray-800 dark:text-white ease-in duration-200">
      <div className="container pt-5 flex w-screen flex-col ">
        {dataContent.map((content, index) => (
          <>
            <div
              className={`time-machine index${
                index + 1
              } flex items-center m-auto w-100% gap-y-4  p-5`}
            >
              {index === 1 && (
                <div className="text-sec2 flex-1 flex flex-col gap-y-4">
                  <h4 className="text-2xl">{content.h4}</h4>
                  <h3 className="text-5xl">{content.h3}</h3>
                  <p className="text-xl"> {content.p}</p>
                  <Link
                    to="/"
                    className="flex w-28 items-center mt-3 py-2 px-5 bg-button rounded-lg hover:bg-hover ease-in duration-200 "
                  >
                    <MdExplore /> <p>EXPLORE</p>
                  </Link>
                </div>
              )}

              <div className="gambar-sec2 flex-1 flex justify-center ">
                <img className="mt-5 w-10" src={content.imgLink} alt="" />
              </div>
              {index !== 1 && (
                <div className="text-sec2 flex-1 flex flex-col gap-y-4  w-80% ">
                  <h4 className="text-2xl">{content.h4}</h4>
                  <h3 className="text-5xl">{content.h3}</h3>
                  <p className="text-xl"> {content.p}</p>
                  <Link
                    to="/"
                    className="flex w-28 items-center mt-3 py-2 px-5 bg-button rounded-lg hover:bg-hover ease-in duration-200 "
                  >
                    <MdExplore /> <p>EXPLORE</p>
                  </Link>
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Section2;
