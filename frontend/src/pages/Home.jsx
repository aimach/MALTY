import SearchSection from "../components/SearchSection";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import "../assets/css/home.css";
import SurpriseSection from "../components/SurpriseSection";
// import beerImg from "../assets/img/beerImg/beer.jpg";

export default function Home() {
  // get all images name
  const images = import.meta.glob("../assets/img/beerImg/*");
  // get object length
  const max = Object.values(images).length - 1;
  // get a random number
  const randomNbr = Math.floor(Math.random() * (max - 0 + 1)) + 0;
  // get random img name
  // const beerImg = `src/${Object.values(images)[randomNbr].name}`;
  const beerImg = Object.values(images)[randomNbr].name;

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
