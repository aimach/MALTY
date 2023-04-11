import { useState } from "react";
import SearchSection from "../components/SearchSection";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import "../assets/css/home.css";
import SurpriseSection from "../components/SurpriseSection";
import image01 from "../assets/img/beerImg/beer.jpg";
import image02 from "../assets/img/beerImg/bottle-caps.jpg";

export default function Home() {
  // get all images name in an array
  const images = [image01, image02];
  // get a random number
  const randomNbr = Math.floor(Math.random() * images.length) + 0;

  // choose nameSearch or surprise
  const [searchType, setSearchType] = useState("name");

  return (
    <div>
      <Navbar />
      <Title />
      <div className="cover-image-container">
        <img src={images[randomNbr]} alt="beer bottle" className="cover-img" />
      </div>
      <div className="choice-button">
        <button type="button" onClick={() => setSearchType("name")}>
          I already know the beer I want
        </button>
        <button type="button" onClick={() => setSearchType("surprise")}>
          Surprise me please
        </button>
      </div>
      {searchType === "name" ? <SearchSection /> : <SurpriseSection />}
      {/* <p>https://punkapi.com/documentation/v2</p>
      <p>https://dribbble.com/shots/20534330-Case-Study-MOVA-Brewery-Website</p> */}
    </div>
  );
}
