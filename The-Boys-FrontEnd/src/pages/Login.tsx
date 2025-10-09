import React, { Component } from "react";
import "./Login.css";

import campus from "../assets/eci-campus.png";
import logoSirha from "../assets/logo-sirha.jpg";
import logoEci from "../assets/logo-eci.png";

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        {/* Barra superior*/}
        <div className="top-bar">
          <img src={logoSirha} alt="Logo pequeño" />
        </div>

        {/* Contenedor principal */}
        <div className="login-container">
          {/* Lado izquierdo con imagen */}
          <div className="login-image">
            <img src={campus} alt="Campus ECI" />
          </div>

          {/* Lado derecho con formulario */}
          <div className="login-form-container">
            <div className="sirha-logo">
              <img src={logoSirha} alt="SIRHA Logo" />
            </div>

            <h1 className="title">Welcome to SIRHA</h1>
            <p className="subtitle">
              The Best Reassignment academic schedule system
            </p>

            <form className="login-form">
              <label htmlFor="email">Institutional email ID</label>
              <input
                type="email"
                id="email"
                placeholder="you@escuelaing.edu.co"
              />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="********" />

              <div className="forgot-password">
                <a href="#">Forgot your password?</a>
              </div>

              <button type="submit">Sign in</button>
            </form>

            <div className="eci-logo">
              <img src={logoEci} alt="Escuela Colombiana de Ingeniería" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
