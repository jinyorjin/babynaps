// src/components/SleepTracker.js
import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

function SleepTracker() {
  const now = new Date().toISOString().slice(0, 16); // current datetime in input format
  const [start, setStart] = useState(now);
  const [end, setEnd] = useState(now);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const startTime = new Date(start);
    const endTime = new Date(end);
    const duration = (endTime - startTime) / (1000 * 60 * 60); // in hours

    if (isNaN(duration) || duration <= 0) {
      setMessage("❌ Invalid time range.");
      return;
    }

    try {
      await addDoc(collection(db, "sleeps"), {
        start: Timestamp.fromDate(startTime),
        end: Timestamp.fromDate(endTime),
        duration: duration.toFixed(2),
        created: Timestamp.now(),
      });
      setMessage(`✅ Saved: Slept ${duration.toFixed(2)} hours`);
      setStart(now);
      setEnd(now);
    } catch (err) {
      console.error(err);
      setMessage("Error saving record.");
    }
  };

  return (
    <div className="container">
      <h2>📝 Record Sleep</h2>
      <form onSubmit={handleSubmit}>
        <label>Start Time</label>
        <input
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          required
        />

        <label>End Time</label>
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
        />

        <button type="submit">Save Record</button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
}

export default SleepTracker;
