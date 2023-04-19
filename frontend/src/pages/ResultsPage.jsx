import { useContext } from "react";
import ResultsContext from "../context/ResultsContext";
import Navbar from "../components/Navbar";
import BeerCard from "../components/BeerCard";
import "../assets/css/resultsPage.css";

function ResultsPage() {
  const { results } = useContext(ResultsContext);

  return (
    <div className="results-page">
      <Navbar />
      <div>
        {results.length ? (
          <div>
            <p className="results">{results.length} results</p>
            {results.map((beer) => (
              <BeerCard beer={beer} key={beer.id} />
            ))}
          </div>
        ) : (
          <p className="results">No result. Try again!</p>
        )}
      </div>
    </div>
  );
}

export default ResultsPage;
