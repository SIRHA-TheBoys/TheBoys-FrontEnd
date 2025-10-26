import "./Notifications.css";
import { IoIosWarning } from "react-icons/io";
import { FaCheck, FaRegTimesCircle } from "react-icons/fa";


interface Props {
    title: String;
    description: String;
    state: "PENDIENT" | "APPROVED" | "REJECTED" | "INPROGRESS";
}


export default function Notifications({title, description, state}: Props) {

  const renderIcon = () => {
    switch (state){
      case "APPROVED":
        return <FaCheck className = " icon-approved " />;
      case "REJECTED":
        return <FaRegTimesCircle className= "icon-rejected"/>;
      case "INPROGRESS":
        return null;
      case "PENDIENT":
      default:
        return <IoIosWarning className= "icon-pending"/>;
      
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
