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
          <Link to="/">수면 기록</Link> | <Link to="/history">수면 내역</Link>
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
