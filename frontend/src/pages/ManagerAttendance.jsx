import React, { useEffect, useState } from "react";
import api from "../api";
import "./ManagerAttendance.css";

export default function ManagerAttendance() {
  const [records, setRecords] = useState([]);

  const fetchData = async () => {
    try {
      const res = await api.get("/api/manager/attendance");
      setRecords(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load attendance");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="att-container">
      <h2 className="att-title">All Employees Attendance</h2>

      <table className="att-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Email</th>
            <th>Date</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Total Hours</th>
          </tr>
        </thead>

        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-data">No records found</td>
            </tr>
          ) : (
            records.map((r) => (
              <tr key={r._id}>
                <td>{r.userId?.name}</td>
                <td>{r.userId?.email}</td>
                <td>{new Date(r.date).toLocaleDateString()}</td>
                <td>{r.checkInTime ? new Date(r.checkInTime).toLocaleTimeString() : "-"}</td>
                <td>{r.checkOutTime ? new Date(r.checkOutTime).toLocaleTimeString() : "-"}</td>
                <td>{r.totalHours || "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
