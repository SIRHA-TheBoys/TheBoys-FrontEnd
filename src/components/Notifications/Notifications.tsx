import "./Notifications.css";
import { IoIosWarning } from "react-icons/io";

export default function Notifications() {
  return (
    <div className="notifications">
      <IoIosWarning className="wIcon"/>
      <div className="text">
        <h2>Pending to approve</h2>
        <h3>lorem ipsum</h3>
      </div>
    </div>
  );
}
