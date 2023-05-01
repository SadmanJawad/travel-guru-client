import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom"
import { FaBars, FaSearch } from "react-icons/fa";
import navLogo from "../../../assets/logo.png"

const Header = () => {
  return (
    <div>
      <nav className="bg-white bg-opacity-0 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
            <img src={navLogo} className="h-8 mr-3 invert" alt="Company Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <div className="flex md:order-2">
            <Link
            to='/login'
              type="button"
              className="text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars></FaBars>
            </button>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <FaSearch></FaSearch>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-white border border-white-300 rounded-lg bg-gray-50 bg-opacity-10 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search your destination..."
            />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50  bg-opacity-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:bg-opacity-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                to='/'
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
              <Link
                to='/blog'
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500"
                  aria-current="page"
                >
                  Blog
                </Link>
              </li>
              <li>
              <Link
                to='/destination'
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500"
                  aria-current="page"
                >
                  Destination
                </Link>
              </li>
              <li>
              <Link
                to='/contact'
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
