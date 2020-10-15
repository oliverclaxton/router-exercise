import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <NavLink className="header___link" to="/home">
        Home Page
      </NavLink>
      <NavLink className="header___link" to="/about">
        About
      </NavLink>
      <NavLink className="header___link" to="/discover">
        Discover Page
      </NavLink>
    </div>
  );
};

export default Navbar;
