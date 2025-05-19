// src/components/SleepHistory.js
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";

function SleepHistory() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const q = query(collection(db, "sleeps"), orderBy("created", "desc"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      start: doc.data().start.toDate().toLocaleString(),
      end: doc.data().end.toDate().toLocaleString(),
    }));
    setRecords(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      await deleteDoc(doc(db, "sleeps", id));
      fetchRecords();
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="container">
      <h2>📅 Sleep History</h2>
      <ul className="record-list">
        {records.map((r) => (
          <li key={r.id}>
            <div>
              💤 {r.start} → {r.end} — <strong>{r.duration} hours</strong>
            </div>
            <button className="delete" onClick={() => handleDelete(r.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SleepHistory;
