import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import useStore from "../store";
import "./Register.css";   // <-- IMPORTANT

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee",
    employeeId: "",
    department: "",
  });

  const navigate = useNavigate();
  const setUser = useStore((s) => s.setUser);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/register", form);
      setUser(
        {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          role: res.data.role,
        },
        res.data.token
      );

      alert("Registered successfully!");
      navigate(res.data.role === "manager" ? "/manager" : "/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <h2 className="register-title">Create Account</h2>

        <form onSubmit={submit} className="register-form">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <select name="role" value={form.role} onChange={handleChange}>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
          </select>

          <input
            name="employeeId"
            placeholder="Employee ID (optional)"
            value={form.employeeId}
            onChange={handleChange}
          />

          <input
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
          />

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
