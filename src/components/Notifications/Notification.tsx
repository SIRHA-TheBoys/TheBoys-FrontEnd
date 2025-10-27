import "./Notification.css";
import { IoIosWarning } from "react-icons/io";
import { FaClock, FaCheck, FaRegTimesCircle } from "react-icons/fa";


interface Props {
    groupDestinyId: String;
    state: "PENDIENT" | "APPROVED" | "REJECTED" | "INPROGRESS";
}


export default function Notification ({groupDestinyId, state}: Props) {

  const renderIcon = () => {
    switch (state){
      case "APPROVED":
        return <FaCheck className = " icon-approved " />;
      case "REJECTED":
        return <FaRegTimesCircle className= "icon-rejected"/>;
      case "INPROGRESS":
        return <FaClock className = "icon-inprogress"/>
      case "PENDIENT":
      default:
        return <IoIosWarning className= "icon-pending"/>;
      
    }
  }

  const renderTitle = () => {
    switch (state){
      case "APPROVED":
        return <div> Request approved </div>;
      case "REJECTED":
        return <div> Request rejected </div>;
      case "INPROGRESS":
        return <div> Request in progress </div>;
      case "PENDIENT":
      default:
        return <div> Pending to approve </div>;
    }
  }

  const renderDescription = () => {
    switch (state){
      case "APPROVED":
        return <div> Your request for {groupDestinyId} is approved! </div>;
      case "REJECTED":
        return <div> Your request for {groupDestinyId} was rejected </div>;
      case "INPROGRESS":
        return <div> Your request for {groupDestinyId} is being reviewed </div>;
      case "PENDIENT":
      default:
        return <div> Your request for {groupDestinyId} is pending to be reviewed </div>;
    }
  }


  return (
    <div className="notifications">
      {renderIcon()}
      <div className="text">
        <h3>{renderTitle()}</h3>
        <h4>{renderDescription()}</h4>
      </div>
    </div>
  );
}
