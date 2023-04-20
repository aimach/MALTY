import { useContext } from "react";
import ResultsContext from "../context/ResultsContext";
import BeerCard from "../components/BeerCard";
import "../assets/css/resultsPage.css";

function ResultsPage() {
  const { results } = useContext(ResultsContext);

  return (
    <div className="results-page">
      <div>
        {results.length ? (
          <div>
            <p className="results">{results.length} results</p>
            <div className="desktop-position-result">
              {results.map((beer) => (
                <BeerCard beer={beer} key={beer.id} />
              ))}
            </div>
          </div>
        ) : (
          <p className="results">No result. Try again!</p>
        )}
      </div>
    </div>
  );
}

export default ResultsPage;
