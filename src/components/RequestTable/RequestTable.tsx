import useRequestNotification from "../../hooks/useRequestNotificationsHook"
import "./RequestTable.css";
import { userHook } from "../../hooks/userHook"
import { useNavigate } from "react-router-dom";

export default function RequestTable() {
  const { requests } = useRequestNotification();
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
            <th>Student</th>
            <th>Subject</th>
            <th>Actual Schedule</th>
            <th>Requested Schedule</th>
            <th>Reason</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req: any, idx: number) => (
            <tr key={req.id}>
              <td>{user?.name ?? "-"}</td>
              <td>{req.subject ?? "-"}</td>
              <td>{req.creationDate ?? "-"}</td>
              <td>{req.responseDate ?? "-"}</td>
              <td>{req.description ?? "-"}</td>
              <td>
                <span className={`state-badge ${String(req.state).toLowerCase()}`}>
                  {String(req.state)}
                </span>
              </td>
              <td>
                <button className="details-button" 
                    onClick={() => navigate(`/requests/${req.id}`)}>View details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
