// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SleepTracker from "./components/SleepTracker";
import SleepHistory from "./components/SleepHistory";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>🍼 BabyNaps</h1>
        <nav>
          <Link to="/">Sleep track</Link> |{" "}
          <Link to="/history">Sleep record</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SleepTracker />} />
          <Route path="/history" element={<SleepHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
