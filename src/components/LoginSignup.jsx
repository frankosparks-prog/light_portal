import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    form_level: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const FormLevels = ["Form One", "Form Two", "Form Three", "Form Four"];

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setForm({ username: "", email: "", password: "", form_level: "" });
    setError("");
    setSuccess("");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? "/api/login" : "/api/signup";
      const { data } = await axios.post(
        `http://localhost:5000${endpoint}`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", data.token);
      setSuccess(data.message);
      setError("");
      navigate("/sidebar"); // Redirect to profile (protected route)
    } catch (err) {
      console.error(err);
      setSuccess("");
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"} to Light Academy</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              name="username"
              placeholder="Name"
              value={form.username}
              onChange={handleChange}
              required
            />
            <select
              name="form_level"
              value={form.form_level}
              onChange={handleChange}
              required
            >
              <option value="">Select Form Level</option>
              {FormLevels.map((level, idx) => (
                <option key={idx} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ marginTop: "1rem" }}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
        {success && (
          <p style={{ color: "green", marginTop: "1rem" }}>{success}</p>
        )}
      </form>

      <p style={{ marginTop: "1rem" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={toggleMode}
          style={{
            textDecoration: "underline",
            border: "none",
            background: "none",
            cursor: "pointer",
            color: "blue",
          }}
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default LoginSignup;
