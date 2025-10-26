import responseRequestHook from "../../hooks/responseRequestHook";
import "./RequestTable.css";
import { userHook } from "../../hooks/userHook"

export default function RequestTable() {
  const { request } = responseRequestHook();
  const { user } = userHook();
  
  const myRequests = Array.isArray(request)
    ? request.filter((r: any) => r.userId === user?.id)
    : [];

  if (myRequests.length === 0) {
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
          {myRequests.map((req: any, idx: number) => (
            <tr key={req.id ?? idx}>
              <td>{req.userId ?? req.student ?? "-"}</td>
              <td>{req.subject ?? req.groupOriginId ?? "-"}</td>
              <td>{req.actualSchedule ?? "-"}</td>
              <td>{req.requestedSchedule ?? req.groupDestinyId ?? "-"}</td>
              <td>{req.description ?? req.reason ?? "-"}</td>
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
