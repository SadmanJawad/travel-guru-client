import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import navLogo from "../../../assets/logo.png"
const Header = () => {
  return (
    <div>
      
<nav class="bg-white bg-opacity-0 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" class="flex items-center">
      <img src={navLogo} class="h-8 mr-3 invert" alt="Company Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="relative hidden md:block">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-white border border-white-300 rounded-lg bg-gray-50 bg-opacity-10 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your destination..."/>
    </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50  bg-opacity-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:bg-opacity-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500" aria-current="page">Destination</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500" aria-current="page">Blog</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500" aria-current="page">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </div>
  );
};

export default Header;
