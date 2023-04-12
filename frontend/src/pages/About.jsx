import React from "react";
import Navbar from "@components/Navbar";
import "../assets/css/about.css";
import bdlogo from "../assets/img/brewdog-logo.png";

function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="about-section">
        <img src={bdlogo} alt="brewdog logo" width="100px" />
        <h1>About Malty and Punk API</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          corporis itaque blanditiis velit. Rerum provident debitis, eveniet
          amet nobis sed nihil! Numquam iste sapiente ea, modi deserunt
          accusantium eaque aliquam!
        </p>
      </div>
    </div>
  );
}

export default About;
