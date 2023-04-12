import { useState } from "react";
import { Link } from "react-router-dom";
import SurpriseSection from "@components/SurpriseSection";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import "../assets/css/home.css";

export default function Home() {
  const [surpriseModale, setSurpriseModale] = useState(false);
  return (
    <div className="home">
      <Navbar />
      <Title />
      <div className="cover-image-container">
        <Link to="/all">
          <button type="button">Browse all beer</button>
        </Link>
        <button type="button" onClick={() => setSurpriseModale(true)}>
          Surprise me !
        </button>
      </div>
      {surpriseModale && (
        <SurpriseSection setSurpriseModale={setSurpriseModale} />
      )}
      {/* <p>https://punkapi.com/documentation/v2</p>
      <p>https://dribbble.com/shots/20534330-Case-Study-MOVA-Brewery-Website</p> */}
    </div>
  );
}
