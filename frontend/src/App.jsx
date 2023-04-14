import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchForm from "@components/SearchForm";
import Home from "./pages/Home";
import All from "./pages/All";
import About from "./pages/About";
import "./App.css";
import ResultsContext from "./context/ResultsContext";

function App() {
  // declare state results for context
  const [results, setResults] = useState([]);

  return (
    <ResultsContext.Provider
      value={{ results: results, setResults: setResults }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchForm />} />
        </Routes>
      </div>
    </ResultsContext.Provider>
  );
}

export default App;
