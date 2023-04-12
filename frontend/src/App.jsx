import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import All from "./pages/All";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/about/*" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
