import { useState } from "react";
import SideBar from "../../components/Layouts/SideBar/SideBar";
import TopBar from "../../components/Layouts/TopBar/TopBar";
import useRequestDescriptionHook from "../../hooks/requestHook/requestDescriptionHook";
import { userHook } from "../../hooks/usersHook/userHook";
import subjectHook from "../../hooks/studentHooks/subjectHook";
import "./RequestDescription.css";
import PopUpAnswerRequest from "../../components/PopUps/PopUpAnswerRequest/PopUpAnswerRequest";

export default function RequestDescription() {
  const [openAnswerPopup, setOpenAnswerPopup] = useState(false);
  const { request, navigate } = useRequestDescriptionHook();
  const { user } = userHook();
  const { subjects } = subjectHook();
  const isAdmin = user?.role === "ADMINISTRATOR"; 

  return (
    <div>
      <TopBar />
      <SideBar />

      <div>
        <button
          className="buttonBackToRequest"
          onClick={() => navigate(`/requests/`)}
        >
          Button Back to Requests
        </button>

        {isAdmin && (
          <>
            <button className="buttonRespondRequest" onClick={() => setOpenAnswerPopup(true)}>
              Request Response
            </button>
            <PopUpAnswerRequest request={request} open={openAnswerPopup} setOpen={setOpenAnswerPopup} />
          </>
        )}

        <div className="requestDescriptionContainer">

          <div className="actualGroup">
            <label>Actual Group</label>
            <div className="valueBox">{request?.groupOriginId || "N/A"}</div>
          </div>

          <div className="destinyGroup">
            <label>Destiny Group</label>
            <div className="valueBox">{request?.groupDestinyId || "N/A"}</div>
          </div>

          <div className="academicPeriod">
            <label>Academic Period</label>
            <div className="valueBox">{request?.creationDate?.split("T")[0] || "N/A"}</div>
          </div>

          <div className="currentState">
            <label>Current State</label>
            <div className="valueBox">{request?.state || "PENDING"}</div>
          </div>

          <div className="requestDescriptionDetails">
            <label>Description</label>
            <div className="valueBox descriptionBox">{request?.description ?? "No description"}</div>
          </div>
          <div className="requestMeta">
              <label>Creation Date</label>
              <div className="requestDescriptionValue">{request?.creationDate ?? "-"}</div>
          </div>
          <div className="requestMeta">
              <label>Response Date</label>
              <div className="requestDescriptionValue">{request?.responseDate ?? "-"}</div>
          </div>
      
          <div className="requestMeta">
              <label>State</label>
              <div className="requestDescriptionValue">{request?.state ?? "-"}</div>
          </div>

        </div>
      </div>
    </div>
  );
}
