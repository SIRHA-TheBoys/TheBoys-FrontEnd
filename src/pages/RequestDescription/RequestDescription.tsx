import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import "./RequestDescription.css";
import { useNavigate } from "react-router-dom";

export default function RequestDescription() {
  const navigate = useNavigate();
  return (
    <div>
      <TopBar />
      <SideBar />
      <div>
        <button
          className="buttonBackToRequest"
          onClick={() => navigate(`/requests/`)}
        >Button Back to Requests</button>
        <div className="requestDescriptionContainer">
            <div className="requestDescription">
                <label>Subject With troubles</label>
            </div>

            <div className="actualGroup">
                <label>Actual Group</label>
            </div>

            <div className="destinyGroup">
                <label>Destiny Group</label>
            </div>

            <div className="academicPeriod">
                <label>Academic Period</label>
            </div>

            <div className="currentState">
                <label>Current State</label>
            </div>

            <div className="requestDescriptionDetails">
                <label>Description</label>
            </div>
            
        </div>
      </div>
    </div>
  );
}
