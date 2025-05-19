// src/components/SleepHistory.js
import React, { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

function SleepHistory() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "sleeps"), orderBy("created", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => {
        const d = doc.data();
        return {
          id: doc.id,
          start: d.start.toDate().toLocaleString(),
          end: d.end.toDate().toLocaleString(),
          duration: d.duration,
        };
      });
      setRecords(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>수면 내역</h2>
      <ul>
        {records.map((r) => (
          <li key={r.id}>
            💤 {r.start} ~ {r.end} — <strong>{r.duration}시간</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SleepHistory;
