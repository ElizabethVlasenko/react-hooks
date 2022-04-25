import React from "react";

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">Github Search</div>
    <ul className="navbar-nav">
      <li className="navbar-item">
        <a className="nav-link" href="/main">
          Main
        </a>
      </li>
      <li className="navbar-item">
        <a className="nav-link" href="/about">
          About
        </a>
      </li>
    </ul>
  </nav>
);
