import logoSirha from "../../assets/logo-sirha.jpg";
import logoEci from "../../assets/logo-eci.png";
import { loginHook } from "../../hooks/loginHook";
import "./Form.css"
export default function Form() {

  const { email, password, setEmail, setPassword, handleLogin } = loginHook();

  return (
    <div className="login-form-container">
      <div className="sirha-logo">
        <img src={logoSirha} alt="SIRHA Logo" />
      </div>
      <h1 className="title">Welcome to SIRHA</h1>
      <p className="subtitle">Reassignment academic schedule system</p>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">Institutional email </label>
        <input
          type="email"
          id="email"
          placeholder="you@mail.escuelaing.edu.co"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className = "signInButton" type="submit">Sign in</button>
      </form>
      <div className="eci-logo">
        <img src={logoEci} alt="Escuela Colombiana de Ingeniería" />
      </div>
    </div>
  );
}
