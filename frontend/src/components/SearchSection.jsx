import { useState } from "react";
import "../assets/css/searchSection.css";
import axios from "axios";
import BeerCard from "./BeerCard";

function SearchSection() {
  const [beers, setBeers] = useState();
  const [beerName, setBeerName] = useState("");

  function searchByName(name) {
    if (name !== "") {
      axios
        .get(`https://api.punkapi.com/v2/beers?beer_name=${name}`)
        .then((response) => {
          setBeers(response.data);
        })
        .catch((err) => console.error(err));
    }
  }

  return (
    <div className="search-section">
      <input
        type="text"
        value={beerName}
        placeholder="Search by name"
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
