import useRequestsHook from "../../hooks/useRequestsHook"
import "./RequestTable.css";

export default function RequestTable() {
  const { requests, loading, error } = useRequestsHook();

  if (loading) {
    return <div className="requestTableContainer">Loading requests...</div>;
  }

  if (error) {
    return <div className="requestTableContainer">Error: {error}</div>;
  }
  
  if (requests.length === 0) {
    return <div className="requestTableContainer">No requests found.</div>;
  }

  return (
    <div className="requestTableContainer">
      <table className="requestTable">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Creation Date</th>
            <th>Response Date</th>
            <th>Reason</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req: any) => (
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
