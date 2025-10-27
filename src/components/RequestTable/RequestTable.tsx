import responseRequestHook from "../../hooks/responseRequestHook";
import "./RequestTable.css";
import { userHook } from "../../hooks/userHook"
import subjectHook from "../../hooks/subjectHook" 

export default function RequestTable() {
  const { request } = responseRequestHook();
  const { user } = userHook();
  const { subjects } = subjectHook();
  
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
                <button className="details-button">View details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
