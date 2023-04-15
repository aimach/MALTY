/* eslint-disable no-unused-expressions */
import React, { useRef, useState } from "react";
// import axios from "axios";
import Navbar from "./Navbar";
// import ResultsContext from "../context/ResultsContext";
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
  // const { setResults } = useContext(ResultsContext);

  // create array with years since Brewdog beginnings
  const d = new Date().getFullYear(); // get actual year
  const years = []; // initialize array
  for (let i = 2008; i <= d; i += 1) {
    years.push(`01-${i}`);
  }

  // create a ref and a state for alcohol degree
  const inputEl = useRef(null);
  const [degree, setDegree] = useState();

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
    // year
    formJson.brewed_after !== "" &&
      (endpoint += `brewed_after=${formJson.brewed_after}`);

    // get datas
    // axios
    //   .get(endpoint)
    //   .then((response) => {
    //     setResults(response.data);
    //   })
    //   .catch((err) => console.error(err));
  }

  return (
    <>
      <Navbar />
      <form method="post" onSubmit={handleSubmit} className="search-form">
        <div className="form-example">
          <label htmlFor="beer_name">Name</label>
          <input
            type="text"
            name="beer_name"
            id="beer_name"
            placeholder="Search by name"
          />
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
        <div>
          {bitterArr.map((bitterness) => {
            return (
              <label htmlFor={bitterness.name} key={bitterness.name}>
                <img
                  src={bitterness.src}
                  alt={`${bitterness.name} logo`}
                  width="50px"
                />
                <input
                  type="radio"
                  id={bitterness.name}
                  name="ibu"
                  value={bitterness.name}
                />
              </label>
            );
          })}
        </div>
        <div>
          {colorArr.map((color) => {
            return (
              <label htmlFor={color.name} key={color.name}>
                <img src={color.src} alt={`${color.name} logo`} width="50px" />
                <input
                  type="radio"
                  id={color.name}
                  name="ebc"
                  value={color.name}
                />
              </label>
            );
          })}
        </div>
        <div className="form-example">
          <label htmlFor="brewed_after">First brewed : </label>
          <select name="brewed_after" id="brewed_after">
            <option value="">--Please choose a year--</option>
            {years.map((year) => {
              const yearOnly = year.slice(3);
              return (
                <option key={year} value={year}>
                  {yearOnly}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit">Give me beers</button>
      </form>
    </>
  );
}

export default SearchForm;
