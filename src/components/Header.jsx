import React from "react";
import { PropTypes } from "prop-types";
import Navbar from "./Navbar";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="mb-8">
      <div className="flex justify-between text-gray-900">
        <p className="text-cyan-500 text-xl">Chota</p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-cyan-600 text-gray-100 px-5 py-1 rounded-md"
        >{`${darkMode ? "Light" : "Dark"}`}</button>
      </div>
      <Navbar />
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Header;
