import SearchSection from "../components/SearchSection";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import beerImg from "../assets/img/bottle-caps.jpg";
import "../assets/css/home.css";
import SurpriseSection from "../components/SurpriseSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Title />
      <div>
        <img src={beerImg} alt="beer bottle" className="cover-img" />
      </div>
      <SearchSection />
      <SurpriseSection />
      {/* <p>https://punkapi.com/documentation/v2</p>
      <p>https://dribbble.com/shots/20534330-Case-Study-MOVA-Brewery-Website</p> */}
    </div>
  );
}
