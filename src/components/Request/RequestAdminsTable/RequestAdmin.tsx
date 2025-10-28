import useRequestHook from "../../../hooks/usersHook/useRequestNotificationsHook";
import { userHook } from "../../../hooks/usersHook/userHook";
import { useNavigate } from "react-router-dom";
import { formatDateToLocal } from "../../../lib/dateHelpers";
import "./RequestAdmin.css";


export default function RequestAdmin() {
  const { requests } = useRequestHook(); // Request dado un estudiante
  const { user } = userHook();
  const navigate = useNavigate();

  if(!user || !requests) {
    return <div className="requestTableContainer">Cargando...</div>;
  }
  
  if (requests.length === 0) {
    return <div className="requestTableContainer">No hay solicitudes.</div>;
  }


 return (
    <div className="requestTableContainer">
      <table className="requestTable">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Actual Schedule</th>
            <th>Requested Schedule</th>
            <th>Reason</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req: any) => (
            <tr key={req.id}>
              <td>{req.subject ?? "-"}</td>
              <td>{formatDateToLocal(req.creationDate)}</td>
              <td>{formatDateToLocal(req.responseDate)}</td>
              <td>{req.description ?? "-"}</td>
              <td>
                <span className={`state-badge ${String(req.state).toLowerCase()}`}>
                  {String(req.state)}
                </span>
              </td>
              <td>
                <button
                  className="details-button"
                  onClick={() => navigate(`/requests/${req.id}`, { state: req })}
                >
                  View details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
