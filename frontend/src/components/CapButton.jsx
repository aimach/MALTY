import React from "react";
import "../assets/css/capButton.css";
import logo from "../assets/img/logo.svg";

function CapButton() {
  return (
    <button type="button" aria-label="Scroll button">
      <img src={logo} alt="matly button" width="50px" />
    </button>
  );
}

export default CapButton;
