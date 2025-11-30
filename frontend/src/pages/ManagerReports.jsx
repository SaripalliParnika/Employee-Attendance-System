import React, { useEffect, useState } from "react";
import api from "../api";
import "./ManagerReports.css";

export default function ManagerReports() {
  const [summary, setSummary] = useState(null);
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSummary = async () => {
    try {
      const res = await api.get("/api/manager/summary");
      setSummary(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAttendance = async () => {
    try {
      const res = await api.get("/api/manager/attendance");
      setAttendance(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const exportCSV = async () => {
    try {
      const res = await api.get("/api/manager/export");
      alert("CSV Export Feature Triggered!");
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    fetchSummary();
    fetchAttendance();
  }, []);

  return (
    <div className="reports-wrapper">
      <h2>📊 Reports & Export</h2>

      {summary && (
        <div className="summary-card">
          <h3>Team Summary</h3>
          <p>Total Employees: {summary.totalEmployees}</p>
          <p>Total Attendance Records: {summary.totalAttendanceRecords}</p>
        </div>
      )}

      <button className="export-btn" onClick={exportCSV}>
        ⬇ Export CSV
      </button>

      <h3>Attendance Records</h3>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="report-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((a, i) => (
              <tr key={i}>
                <td>{a.userId?.name}</td>
                <td>{a.date?.slice(0, 10)}</td>
                <td>{a.checkInTime}</td>
                <td>{a.checkOutTime}</td>
                <td>{a.totalHours || "0"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
