/* eslint-disable no-unused-expressions */
import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import ResultsContext from "../context/ResultsContext";
import "../assets/css/searchForm.css";

function SearchForm() {
  // create a state for results
  const { setResults } = useContext(ResultsContext);

  // create array with years since Brewdog beginnings
  const d = new Date().getFullYear(); // get actual year
  const years = []; // initialize array
  for (let i = 2008; i <= d; i += 1) {
    years.push(`01-${i}`);
  }

  // create a ref and a state for alcohol degree
  const inputEl = useRef(null);
  const [degree, setDegree] = useState();

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
        case "verybitter":
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
        case "doree":
          endpoint += `ebc_lt=30&ebc_gt=13&`;
          break;
        case "ambree":
          endpoint += `ebc_lt=30&ebc_gt=20&`;
          break;
        case "cuivree":
          endpoint += `ebc_lt=45&ebc_gt=30&`;
          break;
        case "brune":
          endpoint += `ebc_lt=75&ebc_gt=45&`;
          break;
        case "tresbrune":
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
    axios
      .get(endpoint)
      .then((response) => {
        setResults(response.data);
      })
      .catch((err) => console.error(err));
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
        <div>
          <label htmlFor="abv">Max degree of alcohol</label>
          <input
            ref={inputEl}
            type="range"
            id="abv"
            name="abv"
            min="0"
            max="55"
            step="1"
            onChange={() => setDegree(inputEl.current.value)}
          />
          {degree !== undefined && (
            <p>
              {degree} {degree > 1 ? "degrees" : "degree"}
            </p>
          )}
        </div>
        <div>
          <input type="radio" id="light" name="ibu" value="light" />
          <label htmlFor="light">light</label>
          <input type="radio" id="medium" name="ibu" value="medium" />
          <label htmlFor="medium">medium</label>
          <input type="radio" id="bitter" name="ibu" value="bitter" />
          <label htmlFor="bitter">bitter</label>
          <input type="radio" id="verybitter" name="ibu" value="verybitter" />
          <label htmlFor="verybitter">very bitter</label>
        </div>
        <div>
          <input type="radio" id="pale" name="ebc" value="pale" />
          <label htmlFor="pale">pale</label>
          <input type="radio" id="blonde" name="ebc" value="blonde" />
          <label htmlFor="blonde">blonde</label>
          <input type="radio" id="doree" name="ebc" value="doree" />
          <label htmlFor="doree">doree</label>
          <input type="radio" id="ambree" name="ebc" value="ambree" />
          <label htmlFor="ambree">ambree</label>
          <input type="radio" id="cuivree" name="ebc" value="cuivree" />
          <label htmlFor="cuivree">cuivree</label>
          <input type="radio" id="brune" name="ebc" value="brune" />
          <label htmlFor="brune">brune</label>
          <input type="radio" id="tresbrune" name="ebc" value="tresbrune" />
          <label htmlFor="tresbrune">tresbrune</label>
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
