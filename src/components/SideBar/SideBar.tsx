import { Link } from "react-router-dom";
import "./SideBar.css";
export default function SideBar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/schedule"> My Schedule </Link>
          </li>
          <li>
            <Link to="/academicTrafficLight"> Academic Traffic Light </Link>
          </li>
          <li>
            <Link to="/requests"> My Requests </Link>
          </li>
          <li>
            <Link to="/basicInformation"> Basic information </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
