import { Link } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaExchangeAlt, FaTrafficLight, FaUser } from "react-icons/fa";
import "./SideBar.css";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/home" className="sidebar-link">
              <FaHome className="sidebar-icon" />
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to="/schedule" className="sidebar-link">
              <FaCalendarAlt className="sidebar-icon" />
              <span>My Schedule</span>
            </Link>
          </li>

          <li>
            <Link to="/requests" className="sidebar-link">
              <FaExchangeAlt className="sidebar-icon" />
              <span>My Requests</span>
            </Link>
          </li>

          <li>
            <Link to="/academicTrafficLight" className="sidebar-link">
              <FaTrafficLight className="sidebar-icon" />
              <span>Academic Traffic Light</span>
            </Link>
          </li>

          <li>
            <Link to="/basicInformation" className="sidebar-link">
              <FaUser className="sidebar-icon" />
              <span>Basic Information</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
