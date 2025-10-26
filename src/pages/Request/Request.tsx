import "./Request.css";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import PopUpRequest from "../../components/PopUpRequest/PopUpRequest";
import RequestTable from "../../components/RequestTable/RequestTable";

export default function Request() {
  return (
  <div>
    <TopBar />
    <SideBar />

    <div className="request">
      <h3 className="request-label">Schedule Change Requests</h3>
      <h1 className="request-welcome">Consult and create your requests</h1>
      <RequestTable />
      <PopUpRequest />
    </div>
  </div>
  );
}