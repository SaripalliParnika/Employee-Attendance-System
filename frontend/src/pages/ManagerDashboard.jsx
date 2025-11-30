import React, { useEffect, useState } from "react";
import api from "../api";
import "./ManagerDashboard.css";

export default function ManagerDashboard() {
  const [allAttendance, setAllAttendance] = useState([]);
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res1 = await api.get("/api/manager/attendance");
      const res2 = await api.get("/api/manager/summary");

      setAllAttendance(res1.data);
      setSummary(res2.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="md-loading">Loading...</div>;

  return (
    <div className="md-container">
      <h2 className="md-title">Manager Dashboard</h2>

      <div className="md-summary-box">
        <div className="md-summary-item">
          <h3>Total Employees</h3>
          <p>{summary.totalEmployees || 0}</p>
        </div>

        <div className="md-summary-item">
          <h3>Total Attendance Records</h3>
          <p>{summary.totalAttendanceRecords || 0}</p>
        </div>
      </div>

      <h3 className="md-subtitle">All Employees Attendance</h3>

      <table className="md-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>EMP ID</th>
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Total Hours</th>
          </tr>
        </thead>

        <tbody>
          {allAttendance.map((a) => (
            <tr key={a._id}>
              <td>{a.userId?.name}</td>
              <td>{a.userId?.employeeId || "-"}</td>
              <td>{new Date(a.date).toLocaleDateString()}</td>
              <td>{a.checkInTime ? new Date(a.checkInTime).toLocaleTimeString() : "-"}</td>
              <td>{a.checkOutTime ? new Date(a.checkOutTime).toLocaleTimeString() : "-"}</td>
              <td>{a.totalHours || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
