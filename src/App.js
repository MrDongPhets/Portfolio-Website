import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";

import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import MyWorkPage from "./pages/myworkpage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/myworkpage" element={<MyWorkPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
