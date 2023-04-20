import React, { useState, useEffect } from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

function Navbar() {
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 45) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className={show ? "navbar" : "hidden-navbar"}>
      <Link to="/">
        <img src={logo} alt="matly logo" width="50px" />
      </Link>
    </div>
  );
}

export default Navbar;
