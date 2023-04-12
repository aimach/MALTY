import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../assets/css/surpriseSection.css";
import BeerCard from "./BeerCard";

function SurpriseSection({ setSurpriseModale }) {
  // https://api.punkapi.com/v2/beers/random

  const [randomBeer, setRandomBeer] = useState("");

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((response) => response.json())
      .then((data) => setRandomBeer(data[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="surprise-section">
      {randomBeer && <BeerCard beer={randomBeer} />}
      <button type="button" onClick={() => setSurpriseModale(false)}>
        Back
      </button>
    </div>
  );
}

SurpriseSection.propTypes = {
  setSurpriseModale: PropTypes.func.isRequired,
};

export default SurpriseSection;
