import React from "react";

import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
