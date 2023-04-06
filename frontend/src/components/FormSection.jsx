import React, { useState, useEffect } from "react";
import "../assets/css/formSection.css";
import BeerCard from "./BeerCard";

function FormSection() {
  // https://api.punkapi.com/v2/beers/random

  const [randomBeer, setRandomBeer] = useState("");
  const [surprise, setSurprise] = useState(false);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((response) => response.json())
      .then((data) => setRandomBeer(data[0]))
      .catch((err) => console.error(err));
  }, [surprise]);

  return (
    <div className="form-section">
      <button type="button" onClick={() => setSurprise(!surprise)}>
        Surprise-me !
      </button>
      {randomBeer && <BeerCard beer={randomBeer} />}
    </div>
  );
}

export default FormSection;
