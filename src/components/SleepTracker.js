// src/components/SleepTracker.js
import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

function SleepTracker() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const startTime = new Date(start);
    const endTime = new Date(end);
    const duration = (endTime - startTime) / (1000 * 60 * 60); // 시간 단위

    if (isNaN(duration) || duration <= 0) {
      setMessage("시간 설정이 올바르지 않아요 😢");
      return;
    }

    try {
      await addDoc(collection(db, "sleeps"), {
        start: Timestamp.fromDate(startTime),
        end: Timestamp.fromDate(endTime),
        duration: duration.toFixed(2),
        created: Timestamp.now(),
      });
      setMessage(`🍼 ${duration.toFixed(2)}시간 잘 잤어요!`);
      setStart("");
      setEnd("");
    } catch (err) {
      console.error(err);
      setMessage("오류가 발생했어요. 다시 시도해주세요.");
    }
  };

  return (
    <div className="container">
      <h2>수면 기록하기</h2>
      <form onSubmit={handleSubmit}>
        <label>시작 시간:</label>
        <input
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          required
        />
        <label>종료 시간:</label>
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
        />
        <button type="submit">기록 저장</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default SleepTracker;
