import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const token = localStorage.getItem("party_menu_token");
  if (token) {
    return <Navigate to="/" replace />;
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const url = "https://serverless-api-teal.vercel.app/api/auth/signin";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    const res = await fetch(url, options);
    const data = await res.json();
    if (data.success) {
      localStorage.setItem("party_menu_token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      navigate("/");
    } else {
      setErrMsg(data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div>
          <img src="https://www.svgrepo.com/show/396527/fork-and-knife-with-plate.svg"
          className="dish-logo" />
          <h1 className="bold-white-text">Party Menu</h1>
          <p className="white-description">Sign in to explore our delicious menu</p>
          {errMsg && <p className="error-message">{errMsg}</p>}
        </div>
        <form className="form" onSubmit={onSubmitForm}>
          <label >Email</label>
          <input
          className="input-field"
            type="text"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label >Password</label>
          <input
          className="input-field"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="gold-button" type="submit" >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
