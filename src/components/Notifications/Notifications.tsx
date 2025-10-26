import "./Notifications.css";
import { IoIosWarning } from "react-icons/io";
import { FaCheck, FaRegTimesCircle } from "react-icons/fa";


interface Props {
    title: String;
    description: String;
    state: "PENDIENT" | "APPROVED" | "REJECTED";
}


export default function Notifications({title, description, state}: Props) {

  const renderIcon = () => {
    switch (state){
      case "APPROVED":
        return <FaCheck className = " icon-approved " />;
      case "PENDIENT":
        return <IoIosWarning className= "icon-pending"/>;
      case "REJECTED":
      default:
        return <FaRegTimesCircle className= "icon-rejected"/>;
    }
  }
  return (

    <div className="notifications">
      {renderIcon()}
      <div className="text">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
}
