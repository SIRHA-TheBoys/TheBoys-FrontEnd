import logoSirha from "../../assets/logo-sirha.jpg";
import "./TopBar.css";
export default function TopBar() {
  return (
    <header className="top-bar">
      <div className="brand">
        <h1>SIRHA</h1>
        <img src={logoSirha} alt="Logo pequeño" />
      </div>
    </header>
  );
}
