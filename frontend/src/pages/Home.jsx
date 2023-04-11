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

  return (
    <div>
      <Navbar />
      <Title />
      <div className="cover-image-container">
        <img src={images[randomNbr]} alt="beer bottle" className="cover-img" />
      </div>
      <SearchSection />
      <SurpriseSection />
      {/* <p>https://punkapi.com/documentation/v2</p>
      <p>https://dribbble.com/shots/20534330-Case-Study-MOVA-Brewery-Website</p> */}
    </div>
  );
}
