/* eslint-disable no-unused-expressions */
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import ResultsContext from "../context/ResultsContext";
import "../assets/css/searchForm.css";
import pale from "../assets/img/beerImg/pale.svg";
import blonde from "../assets/img/beerImg/blonde.svg";
import amber from "../assets/img/beerImg/amber.svg";
import deepAmber from "../assets/img/beerImg/deepAmber.svg";
import brown from "../assets/img/beerImg/brown.svg";
import deepBrown from "../assets/img/beerImg/deepBrown.svg";
import black from "../assets/img/beerImg/black.svg";
import light from "../assets/img/light.svg";
import medium from "../assets/img/medium.svg";
import bitter from "../assets/img/bitter.svg";
import deepBitter from "../assets/img/deepBitter.svg";

function SearchForm() {
  // create a state for results
  const { setResults } = useContext(ResultsContext);

  // create a ref and a state for alcohol degree
  const inputEl = useRef(null);
  const [degree, setDegree] = useState();
  const navigate = useNavigate();

  // create a color array
  const colorArr = [
    { name: "pale", src: pale },
    { name: "blonde", src: blonde },
    { name: "amber", src: amber },
    { name: "deepAmber", src: deepAmber },
    { name: "brown", src: brown },
    { name: "deepBrown", src: deepBrown },
    { name: "black", src: black },
  ];

  // create a bitter array
  const bitterArr = [
    { name: "light", src: light },
    { name: "medium", src: medium },
    { name: "bitter", src: bitter },
    { name: "deepBitter", src: deepBitter },
  ];

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());

    // create the endpoint
    let endpoint = "https://api.punkapi.com/v2/beers?";

    // name
    formJson.beer_name !== "" &&
      (endpoint += `beer_name=${formJson.beer_name}&`);
    // alcohol
    formJson.abv !== "" && (endpoint += `abv_lt=${formJson.abv}&`);
    // bitter
    if (formJson.ibu !== "") {
      switch (formJson.ibu) {
        case "light":
          endpoint += `ibu_lt=15&ibu_gt=0&`;
          break;
        case "medium":
          endpoint += `ibu_lt=50&ibu_gt=16&`;
          break;
        case "bitter":
          endpoint += `ibu_lt=70&ibu_gt=51&`;
          break;
        case "deepBitter":
          endpoint += `ibu_gt=70&`;
          break;
        default:
          endpoint;
          break;
      }
    }
    // color
    if (formJson.ebc !== "") {
      switch (formJson.ebc) {
        case "pale":
          endpoint += `ebc_lt=9&ebc_gt=0&`;
          break;
        case "blonde":
          endpoint += `ebc_lt=12&ebc_gt=10&`;
          break;
        case "amber":
          endpoint += `ebc_lt=30&ebc_gt=13&`;
          break;
        case "deepAmber":
          endpoint += `ebc_lt=30&ebc_gt=20&`;
          break;
        case "brown":
          endpoint += `ebc_lt=45&ebc_gt=30&`;
          break;
        case "deepBrown":
          endpoint += `ebc_lt=75&ebc_gt=45&`;
          break;
        case "black":
          endpoint += `ebc_gt=75&`;
          break;
        default:
          endpoint;
          break;
      }
    }

    // get datas
    axios
      .get(`${endpoint}per_page=80`)
      .then((response) => {
        setResults(response.data);
      })
      .catch((err) => console.error(err));
    navigate("/search/results");
  }

  return (
    <>
      <Navbar />
      <div className="desktop-position">
        <form method="post" onSubmit={handleSubmit} className="search-form">
          <div className="name-section">
            <label htmlFor="beer_name">
              <input
                type="text"
                name="beer_name"
                id="beer_name"
                placeholder="Search by name"
              />
            </label>
          </div>
          <div className="abv-section">
            <label htmlFor="abv">
              <p>{degree}° max</p>
              <input
                ref={inputEl}
                type="range"
                id="abv"
                name="abv"
                min="0"
                max="55"
                step="1"
                onChange={() => setDegree(inputEl.current.value)}
                className="range"
              />
            </label>
          </div>
          <div className="ibu-section">
            {bitterArr.map((bitterness) => {
              return (
                <label htmlFor={bitterness.name} key={bitterness.name}>
                  <input
                    type="radio"
                    id={bitterness.name}
                    name="ibu"
                    value={bitterness.name}
                  />
                  <img
                    src={bitterness.src}
                    alt={`${bitterness.name} logo`}
                    className="bitter-logo"
                  />
                </label>
              );
            })}
          </div>
          <div className="ebc-section">
            {colorArr.map((color) => {
              return (
                <label htmlFor={color.name} key={color.name}>
                  <input
                    type="radio"
                    id={color.name}
                    name="ebc"
                    value={color.name}
                  />
                  <img
                    src={color.src}
                    alt={`${color.name} logo`}
                    className="color-logo"
                  />
                </label>
              );
            })}
          </div>
          <button type="submit" className="submit-button">
            Give me beers
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;
