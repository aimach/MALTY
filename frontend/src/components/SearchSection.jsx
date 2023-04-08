import { useState, useEffect } from "react";
import "../assets/css/searchSection.css";
import axios from "axios";
import BeerCard from "./BeerCard";

function SearchSection() {
  const [beers, setBeers] = useState();
  const [beerName, setBeerName] = useState("");

  // useEffect(() => {
  //   fetch("https://api.punkapi.com/v2/beers/random")
  //     .then((response) => response.json())
  //     .then((data) => setRandomBeer(data[0]))
  //     .catch((err) => console.error(err));
  // }, []);

  function searchByName(name) {
    if (name !== "") {
      axios
        .get(`https://api.punkapi.com/v2/beers?beer_name=${name}`)
        .then((response) => {
          setBeers(response.data);
        });
    }
  }

  return (
    <div className="search-section">
      <input
        type="text"
        value={beerName}
        onChange={(e) => setBeerName(e.target.value)}
      />
      <button type="button" onClick={() => searchByName(beerName)}>
        Search by name
      </button>
      <div className="results-section">
        {beers ? (
          beers.map((beer) => <BeerCard beer={beer} key={beer.id} />)
        ) : (
          <p>No result</p>
        )}
      </div>
    </div>
  );
}

export default SearchSection;
