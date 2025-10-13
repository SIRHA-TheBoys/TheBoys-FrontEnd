import logoSirha from "../assets/logo-sirha.jpg";
import logoEci from "../assets/logo-eci.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user";

type user = {};

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => async () => {
    if (!email || !password) {
      alert("Plese complete all fields");
      setEmail("");
      setPassword("");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type: ": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Invalid credentials");
        return;
      }

      alert("Login succesful!");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form-container">
      <div className="sirha-logo">
        <img src={logoSirha} alt="SIRHA Logo" />
      </div>
      <h1 className="title">Welcome to SIRHA</h1>
      <p className="subtitle">Reassignment academic schedule system</p>
      <form className="login-form" onChange={handleLogin}>
        <label htmlFor="email">Institutional email </label>
        <input
          type="email"
          id="email"
          placeholder="you@mail.escuelaing.edu.co"
        />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="********" />
        <button type="submit" onClick={handleLogin}>
          Sign in
        </button>
      </form>
      <div className="eci-logo">
        <img src={logoEci} alt="Escuela Colombiana de Ingeniería" />
      </div>
    </div>
  );
}
