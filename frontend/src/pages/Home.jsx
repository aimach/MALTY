import Title from "../components/Title";
import Navbar from "../components/Navbar";
import "../assets/css/home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Title />
      <div className="cover-image-container">
        <div className="choice-button">
          <button type="button">I already know the beer I want</button>
          <button type="button">Surprise me please</button>
        </div>
      </div>
      {/* <p>https://punkapi.com/documentation/v2</p>
      <p>https://dribbble.com/shots/20534330-Case-Study-MOVA-Brewery-Website</p> */}
    </div>
  );
}
