import { Link } from "react-router-dom";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import "../assets/css/home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Title />
      <div className="cover-image-container">
        <Link to="/all">
          <button type="button">Browse all beer</button>
        </Link>
        <button type="button">Surprise me !</button>
      </div>
      {/* <p>https://punkapi.com/documentation/v2</p>
      <p>https://dribbble.com/shots/20534330-Case-Study-MOVA-Brewery-Website</p> */}
    </div>
  );
}
