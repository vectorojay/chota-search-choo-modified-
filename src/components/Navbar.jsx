import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="flex justify-between text-cyan-500 mt-8">
      <Search />
      <ul className="flex gap-6">
        <li>
          <Link to="/web">Web</Link>
        </li>
        <li>
          <Link to="/video">Video</Link>
        </li>
        <li>
          <Link to="image">Image</Link>
        </li>
        <li>
          <Link to="news">News</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
