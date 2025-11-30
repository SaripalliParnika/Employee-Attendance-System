import React, { useEffect, useState } from "react";
import api from "../api";
import "./TeamCalendar.css";

export default function TeamCalendar() {
  const [records, setRecords] = useState([]);

  const fetchData = async () => {
    try {
      const res = await api.get("/api/manager/attendance");
      setRecords(res.data);
    } catch (err) {
      console.error(err);
      alert("Error loading calendar");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Group data by date
  const grouped = {};
  records.forEach((rec) => {
    const date = rec.date.split("T")[0];
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(rec);
  });

  return (
    <div className="calendar-container">
      <h2>Team Attendance Calendar</h2>

      {Object.keys(grouped).length === 0 && (
        <p>No attendance records yet.</p>
      )}

      {Object.keys(grouped).map((date) => (
        <div key={date} className="calendar-card">
          <h3>{date}</h3>

          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {grouped[date].map((rec) => (
                <tr key={rec._id}>
                  <td>{rec.userId?.name}</td>
                  <td>{rec.checkInTime ? rec.checkInTime.split("T")[1].slice(0,5) : "-"}</td>
                  <td>{rec.checkOutTime ? rec.checkOutTime.split("T")[1].slice(0,5) : "-"}</td>
                  <td>
                    <span className={rec.status === "present" ? "present" : "absent"}>
                      {rec.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      ))}
    </div>
  );
}
