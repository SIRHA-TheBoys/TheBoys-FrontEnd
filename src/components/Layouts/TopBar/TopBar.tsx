import logoSirha from "../../assets/logo-sirha-no-font.png";
import { FaUserCircle } from "react-icons/fa"
import {Link} from "react-router-dom"
import { useState, useEffect, useRef} from "react";
import "./TopBar.css";

export default function TopBar() {

  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setMenuVisible((prev) => !prev)
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, []);

  return (
    <header className="top-bar">
      <div className="brand">
        <img src={logoSirha} alt="Logo pequeño" />
        <h1>SIRHA</h1>
      </div>

      <div className = "user-container" ref={menuRef}>
        <button className="user-button" onClick={handleClick}>
          <FaUserCircle className="user-icon"/>
        </button>  
        
        {menuVisible && (      
          <nav className="user-menu">
            <ul>
              <li>
                <Link to= "/" className="login-link">
                  <span>Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
