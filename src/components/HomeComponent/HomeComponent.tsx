import Notifications from "../../components/Notifications/Notifications";
import {FaUser, FaCalendarAlt, FaExchangeAlt, FaTrafficLight} from "react-icons/fa";
import { Link } from "react-router-dom"
import { userHook } from "../../hooks/userHook"

export default function HomeComponent (){

  const { role }  = userHook();
  const isAdmin = role === "administrator";

  const mySchedule = isAdmin ? "Students Schedule" : "My Schedule";
  const request = isAdmin ? "Received Requests" : "My Requests";
  const academicTrafficLight = isAdmin ? "Student Academic Traffic Light" : "Academic Traffic Light";


  return (
    <div className = "mainContainer">
        <div className = "buttonsContainer">
          <nav>
            <ul>
              <li>
                <Link to = "/schedule" className = "home-links">
                <FaCalendarAlt className="icon"/>
                <span> {mySchedule} </span>
                </Link>
              </li>
              <li>
                <Link to = "/academicTrafficLight" className="home-links">
                  <FaTrafficLight className="icon"/>
                  <span> {academicTrafficLight} </span>
                </Link>
              </li>
              <li>
                <Link to = "/requests" className = "home-links">
                  <FaExchangeAlt className="icon"/>
                  <span> {request} </span>
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
          
          <Notifications/>
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
  )
  
}