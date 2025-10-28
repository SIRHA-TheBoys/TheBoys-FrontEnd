import "./PopUpAnswerRequest.css";
import { useState, useEffect } from "react";

type Props = {
  request: any | null;
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function PopUpAnswerRequest({ request, open, setOpen }: Props) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  if (!request) {
    return null;
  }

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [open]);

  async function updateRequest(newState: string) {
    setLoading(true);
    try {
      const payload: any = {
        id: request.id,
        userId: request.userId,
        groupOriginId: request.groupOriginId,
        groupDestinyId: request.groupDestinyId,
        creationDate: request.creationDate,
        responseDate: new Date().toISOString(),
        description: request.description,
        state: newState,
      };

      const res = await fetch(`http://localhost:8080/requests/requests/${request.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error("Failed to update request", res.status);
      } else {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          setOpen(false);
        }, 1500);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }

  return (
    <>
      {open && (
        <div className="popUp-overlay">
          <div className="popUp-container">
            <h2 className="popUp-title">Check Request</h2>
            <p className="popUp-subtitle">Approve or Deny this request.</p>

            <div className="popUp-info">

              <label>Group origin</label>
              <div className="popUp-value">{request.groupOriginId ?? "N/A"}</div>

              <label>Group destiny</label>
              <div className="popUp-value">{request.groupDestinyId ?? "N/A"}</div>

              <label>Observations</label>
              <div className="popUp-value descriptionBox">{request.description ?? "N/A"}</div>

              <label>Respond (observations)</label>
              <textarea className="popUp-textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>

            <div className="popUp-buttons">
              <button className="cancel-button" disabled={loading} onClick={() => { updateRequest("REPROVED"); }}>
                Deny
              </button>
              <button className="send-button" disabled={loading} onClick={() => { updateRequest("APPROVED"); }}>
                {loading ? "Processing..." : "Accept"}
              </button>
            </div>
          </div>
        </div>
      )}
      {showAlert && <div className="alertRequest">The Request has been updated</div>}
    </>
  );
}
