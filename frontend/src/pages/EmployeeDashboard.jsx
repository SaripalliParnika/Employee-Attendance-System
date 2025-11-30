import React, { useEffect, useState } from "react";
import api from "../api";
import useStore from "../store";
import "./EmployeeDashboard.css";

export default function EmployeeDashboard() {
  const user = useStore((s) => s.user);
  const [todayStatus, setTodayStatus] = useState(null);

  const fetchToday = async () => {
    try {
      const res = await api.get("/api/attendance/today");
      setTodayStatus(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchToday();
  }, []);

  const handleCheckIn = async () => {
    try {
      await api.post("/api/attendance/checkin");
      alert("Checked in");
      fetchToday();
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  const handleCheckOut = async () => {
    try {
      await api.post("/api/attendance/checkout");
      alert("Checked out");
      fetchToday();
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Employee Dashboard</h2>

      <div className="dashboard-welcome">
        Welcome, {user?.name}
      </div>

      <div className="dashboard-buttons">
        <button className="checkin-btn" onClick={handleCheckIn}>Check In</button>
        <button className="checkout-btn" onClick={handleCheckOut}>Check Out</button>
      </div>

      
    </div>
  );
}
