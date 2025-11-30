import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AttendanceHistory from "./pages/AttendanceHistory";
import EmployeeProfile from "./pages/EmployeeProfile";   // ✅ NEW

import ManagerDashboard from "./pages/ManagerDashboard";
import ManagerAttendance from "./pages/ManagerAttendance";
import TeamCalendar from "./pages/TeamCalendar";
import ManagerReports from "./pages/ManagerReports";

import useStore from "./store";
import "./App.css";

function App() {
  const logout = useStore((s) => s.logout);
  const user = useStore((s) => s.user);

  return (
    <div className="app-container">
      <header className="navbar">
        <nav>
          <Link to="/">Home</Link>

          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}

          {user && user.role === "employee" && (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/history">My History</Link>
              <Link to="/profile">My Profile</Link> {/* ✅ PROFILE LINK */}
            </>
          )}

          {user && user.role === "manager" && (
            <>
              <Link to="/manager">Manager Dashboard</Link>
              <Link to="/manager/attendance">All Attendance</Link>
              <Link to="/manager/calendar">Team Calendar</Link>
              <Link to="/manager/reports">Reports</Link>
            </>
          )}

          {user && (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          )}
        </nav>
      </header>

      <Routes>
        {/* Public */}
        <Route path="/" element={<div>Welcome — open Login or Register</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Employee */}
        <Route path="/dashboard" element={<EmployeeDashboard />} />
        <Route path="/history" element={<AttendanceHistory />} />
        <Route path="/profile" element={<EmployeeProfile />} /> {/* ✅ PROFILE ROUTE */}

        {/* Manager */}
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/manager/attendance" element={<ManagerAttendance />} />
        <Route path="/manager/calendar" element={<TeamCalendar />} />
        <Route path="/manager/reports" element={<ManagerReports />} />
      </Routes>
    </div>
  );
}

export default App;
