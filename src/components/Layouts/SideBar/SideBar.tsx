import { Link } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaExchangeAlt, FaTrafficLight, FaUser,  FaChartBar  } from "react-icons/fa";
import "./SideBar.css";
import { userHook } from "../../../hooks/usersHook/userHook"



export default function SideBar() {

  const { role }  = userHook();
  const isAdmin = role === "administrator";

  const mySchedule = isAdmin ? "Students Schedule" : "My Schedule";
  const request = isAdmin ? "Received Requests" : "My Requests";
  const academicTrafficLight = isAdmin ? "Student Academic Traffic Light" : "Academic Traffic Light";



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
              <span>{mySchedule}</span>
            </Link>
          </li>

          <li>
            <Link to="/requests" className="sidebar-link">
              <FaExchangeAlt className="sidebar-icon" />
              <span>{request}</span>
            </Link>
          </li>

          <li>
            <Link to="/academicTrafficLight" className="sidebar-link">
              <FaTrafficLight className="sidebar-icon" />
              <span>{academicTrafficLight}</span>
            </Link>
          </li>

          <li>
            <Link to="/basicInformation" className="sidebar-link">
              <FaUser className="sidebar-icon" />
              <span>Basic Information</span>
            </Link>
          </li>
          { isAdmin ? (
            <li>
              <Link  to="/requestStatistics" className="sidebar-link">
               <FaChartBar className="sidebar-icon" />
               <span> Statistics </span>
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </aside>
  );
}
