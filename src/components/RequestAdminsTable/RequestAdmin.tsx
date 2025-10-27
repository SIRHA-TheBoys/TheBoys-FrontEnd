import "./RequestAdmin.css";
import { userHook } from "../../hooks/userHook"
import allRequestsHook from "../../hooks/allRequestsHook";

export default function RequestAdmin() {
  const { request } = allRequestsHook(); // Request dado un estudiante
  const { user } = userHook();

  if(!user || !request) {
    return <div className="requestTableContainer">Cargando...</div>;
  }
  
  if (request.length === 0) {
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
          {request.map((req: any) => (
            <tr key={req.id}>
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
                <button className="details-button">View details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
