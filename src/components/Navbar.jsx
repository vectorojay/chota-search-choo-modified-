import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-cyan-500">
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
