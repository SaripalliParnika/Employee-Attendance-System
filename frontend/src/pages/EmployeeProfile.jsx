import React from "react";
import useStore from "../store";
import "./EmployeeProfile.css";

export default function Profile() {
  const user = useStore((s) => s.user);

  if (!user) return <div className="profile-container">Loading...</div>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>My Profile</h2>

        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>

          {user.role === "employee" && (
            <>
              <p><strong>Employee ID:</strong> {user.employeeId || "—"}</p>
              <p><strong>Department:</strong> {user.department || "—"}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
