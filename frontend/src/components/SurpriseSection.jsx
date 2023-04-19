import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../assets/css/surpriseSection.css";
import CompleteBeerCard from "./CompleteBeerCard";

function SurpriseSection({ setSurpriseModale }) {
  const [randomBeer, setRandomBeer] = useState("");

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((response) => response.json())
      .then((data) => setRandomBeer(data[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="surprise-section">
      {randomBeer && (
        <CompleteBeerCard
          beer={randomBeer}
          setSurpriseModale={setSurpriseModale}
        />
      )}
    </div>
  );
}

SurpriseSection.propTypes = {
  setSurpriseModale: PropTypes.func.isRequired,
};

export default SurpriseSection;
