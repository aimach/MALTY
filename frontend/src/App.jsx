import { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import Home from "./pages/Home";
import All from "./pages/All";
import About from "./pages/About";
import "./App.css";
import ResultsContext from "./context/ResultsContext";
import ResultsPage from "./pages/ResultsPage";
import Navbar from "./components/Navbar";

function App() {
  // declare state results for context
  const [results, setResults] = useState([]);
  const resultsSet = useMemo(() => ({ results, setResults }), [results]);

  return (
    <ResultsContext.Provider value={resultsSet}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchForm />} />
          <Route path="/search/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </ResultsContext.Provider>
  );
}

export default App;
