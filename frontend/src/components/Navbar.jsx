import React from "react";
import "../assets/css/navbar.css";
import logo from "../assets/img/logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="matly logo" width="50px" />
      <nav>
        <ul>
          <li>All</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
