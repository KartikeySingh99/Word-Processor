import React from "react";
import { Link } from "react-router-dom";
// import About from "./About";
function Navbar() {
  return (
    <>
      <div className="nav">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <input type="text" id="search" />
      </div>
    </>
  );
}

export default Navbar;
