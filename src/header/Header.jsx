import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white text-black sticky top-0 p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-2xl md:text-3xl hover:indigo font-bold">
            Matthew Ladipo
          </h1>
        </Link>
        {/* Navigation */}
        <nav>
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-[10vh] left-0 w-full bg-white p-5 space-y-5 sm:space-y-0 sm:flex sm:space-x-20 sm:relative sm:w-auto sm:p-0 sm:bg-transparent sm:top-auto sm:flex-row text-gray-400 transition-all duration-300`}
          >
            <li className="">
              <Link
                to={"/"}
                className="hover:underline decoration-[none]  hover:text-blue-600 transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to={"#about"}
                className="hover:underline hover:text-blue-600 transition duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="#projects"
                className="hover:underline hover:text-blue-600 transition duration-300"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="hover:underline hover:text-blue-600 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
