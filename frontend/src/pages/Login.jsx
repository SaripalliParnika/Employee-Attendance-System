import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import useStore from "../store";
import "./Login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const setUser = useStore((s) => s.setUser);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", form);
      setUser(
        {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          role: res.data.role,
        },
        res.data.token
      );
      navigate(res.data.role === "manager" ? "/manager" : "/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={submit}>
          <input
            name="email"
            placeholder="Email"
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

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
