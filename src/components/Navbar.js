import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="header">
        <NavLink className="header__link" exact to="/home">
          Home Page
        </NavLink>

        <NavLink className="header__link" exact to="/about">
          About
        </NavLink>

        <NavLink className="header__link" exact to="/discover">
          Discover Page
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
