import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">Github Search</div>
    <ul className="navbar-nav">
      <li className="navbar-item">
        <NavLink to="/" exact="true" className="nav-link">
          Home
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink to="/about" exact="true" className="nav-link">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);
