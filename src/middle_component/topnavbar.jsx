import React from "react";
import { Link } from "react-router-dom";
// import "italentimg.jpg";

const Navbar = () => {
  return (
    // <nav>
    <nav className="relative  bg-gray-900 text-white rounded">
      <div className="container mx-auto px-4">
        <a href="" className="flex-shrink-0 ">
          <img
            src="../src/italentimg.jpg"
            alt="ITalent Logo"
            className="w-20 h-15 border-0 pt-4 pl-3"
          />
        </a>
        {/* <div className="flex ml-5">
          <span className="text-white ">ITalent Digital</span>
        </div> */}

        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <div className="hidden md:flex md:ml-4 space-x-4">
              <a href="" className="text-white ">
                Home
              </a>
              <div className="relative">
                <a href="" className="text-white">
                  Forums
                </a>
              </div>
              <div className="relative">
                <a href="" className="text-white">
                  What's new
                </a>
              </div>
              <div className="relative">
                <a href="" className="text-white">
                  Media
                </a>
              </div>
              {/* --------------------------------------------------- */}

              {/* -------------------------------------------------------------------- */}

              <div className="relative">
                <a href="" className="text-white">
                  Resources
                </a>
              </div>
              <div className="relative hover:underline">
                <Link to="/" className="text-white">
                  Members
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="space-x-4">
              <a href="/community/login/" className="text-white">
                Log in
              </a>
              <a href="/community/register/" className="text-white">
                Register
              </a>
              <a href="/community/register/" className="text-white">
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // <div className="w-full h-16 bg-blue py-3"></div>
    // </nav>
  );
};

export default Navbar;
