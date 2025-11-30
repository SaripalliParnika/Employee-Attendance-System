import React, { useEffect, useState } from "react";
import api from "../api";

export default function AttendanceHistory() {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const res = await api.get("/api/attendance/my-history");
      setHistory(res.data);
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div>
      <h2>My Attendance History</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr><th>Date</th><th>Check In</th><th>Check Out</th><th>Status</th><th>Total Hours</th></tr>
        </thead>
        <tbody>
          {history.length === 0 ? <tr><td colSpan="5">No records</td></tr> : null}
          {history.map((r) => (
            <tr key={r._id}>
              <td>{new Date(r.date).toLocaleDateString()}</td>
              <td>{r.checkInTime ? new Date(r.checkInTime).toLocaleTimeString() : "-"}</td>
              <td>{r.checkOutTime ? new Date(r.checkOutTime).toLocaleTimeString() : "-"}</td>
              <td>{r.status}</td>
              <td>{r.totalHours || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
