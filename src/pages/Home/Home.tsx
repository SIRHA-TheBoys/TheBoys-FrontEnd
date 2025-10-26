import Notifications from "../../components/Notifications/Notifications";
import "./Home.css";
import TopBar from "../../components/TopBar/TopBar";
import {FaUser, FaCalendarAlt, FaExchangeAlt, FaTrafficLight} from "react-icons/fa";
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <TopBar />
      <div className = "mainContainer">
        <div className = "buttonsContainer">
          <nav>
            <ul>
              <li>
                <Link to = "/schedule" className = "home-links">
                  <FaCalendarAlt className="icon"/>
                  <span> My Schedule </span>
                </Link>
              </li>
              <li>
                <Link to = "/academicTrafficLight" className="home-links">
                  <FaTrafficLight className="icon"/>
                  <span> Academic traffic light</span>
                </Link>
              </li>
              <li>
                <Link to = "/requests" className = "home-links">
                  <FaExchangeAlt className="icon"/>
                  <span>My requests</span>
                </Link>
              </li>
              <li>
                <Link to = "/basicInformation" className = "home-links">
                  <FaUser className="icon"/>
                  <span>Basic information</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="notificationContainer">
          <h2>Notifications</h2>

          <nav>
            <ul>
              <li>
                <Link to = "/requests" className= "notifications-link">
                  <span>View all notifications</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}