import { useState } from "react";
import "./PopUpRequest.css";

export default function PopUpRequest() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="request-button" onClick={() => setOpen(true)}>
        Create New Request
      </button>

      {open && (
        <div className="popUp-overlay">
          <div className="popUp-container">
            <h2 className="popUp-title">Schedule request</h2>
            <p className="popUp-subtitle">
              Complete the form to request a change of subject or group.
            </p>

            <div className="popUp-form">
              <label>Subject with troubles</label>
              <select>
                <option>Select an option</option>
              </select>

              <label>Actual subject</label>
              <select>
                <option>Select an option</option>
              </select>

              <label>Suggest of change (Subject or group destiny)</label>
              <select>
                <option>Select an option</option>
              </select>

              <label>Additional observations (Max 200 characters)</label>
              <textarea
                placeholder="Enter your observations"
                rows={4}
              ></textarea>
            </div>

            <div className="popUp-buttons">
              <button className="cancel-button" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="send-button">Send request</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
