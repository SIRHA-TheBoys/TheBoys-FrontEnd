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
          <div className="labelsCard">
            <div className="requestDescriptionContainer">

          <div className="actualGroup">
            <div className="label-box" role="group" aria-label="Actual Group">
              <label>Actual Group</label>
              <div className="valueBox">{request?.groupOriginId || "N/A"}</div>
            </div>
          </div>

          <div className="destinyGroup">
            <div className="label-box" role="group" aria-label="Destiny Group">
              <label>Destiny Group</label>
              <div className="valueBox">{request?.groupDestinyId || "N/A"}</div>
            </div>
          </div>

          <div className="academicPeriod">
            <div className="label-box" role="group" aria-label="Academic Period">
              <label>Academic Period</label>
              <div className="valueBox">{request?.creationDate?.split("T")[0] || "N/A"}</div>
            </div>
          </div>

          <div className="currentState">
            <div className="label-box" role="group" aria-label="Current State">
              <label>Current State</label>
              <div className="valueBox">{request?.state || "PENDING"}</div>
            </div>
          </div>

          <div className="requestDescriptionDetails">
            <div className="label-box" role="group" aria-label="Description">
              <label>Description</label>
              <div className="valueBox descriptionBox">{request?.description ?? "No description"}</div>
            </div>
          </div>
          <div className="requestMeta">
              <div className="label-box" role="group" aria-label="Creation Date">
                <label>Creation Date</label>
                <div className="requestDescriptionValue">{request?.creationDate ?? "-"}</div>
              </div>
          </div>
          <div className="requestMeta">
              <div className="label-box" role="group" aria-label="Response Date">
                <label>Response Date</label>
                <div className="requestDescriptionValue">{request?.responseDate ?? "-"}</div>
              </div>
          </div>

            </div>
          </div>

          <div className="pageActions">
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
          </div>
      </div>
    </div>
  );
}
