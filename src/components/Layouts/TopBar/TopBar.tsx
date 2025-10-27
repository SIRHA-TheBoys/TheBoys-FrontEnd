import logoSirha from "../../../assets/logo-sirha-no-font.png";
import "./TopBar.css";
export default function TopBar() {
  return (
    <header className="top-bar">
      <div className="brand">
        <img src={logoSirha} alt="Logo pequeño" />
        <h1>SIRHA</h1>
        
      </div>
    </header>
  );
}
