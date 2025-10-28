import "./PopUpRequest.css";
import requestHook from "../../../hooks/requestHook/requestHook";

export default function PopUpRequest() {

  const {handleOnSubmit, open, description, groups,
     showAlert, groupOriginId, groupDestinyId, 
     setOpen, setDescription, setGroupOriginId, 
     setGroupDestinyId} = requestHook();

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
              
              <select
                value={groupOriginId}
                onChange={(e) => setGroupOriginId(e.target.value)}
              >
                <option>Select an option</option>
                {groups?.map((group: any, idx: number) => {
                  const id = group.id ?? group._id ?? `${group.subjectCode}-${group.numberGroup}`;
                  const subjectName = group.subjectName ?? group.subjectCode;
                  return (
                    <option key={id ?? idx} value={id}>
                      {`Grupo ${group.numberGroup} - ${subjectName}`}
                    </option>
                  );
                })}
              </select>

              <label>Suggest To Change (Subject or group destiny)</label>

                <select
                  value={groupDestinyId}
                  onChange={(e) => setGroupDestinyId(e.target.value)}
                >
                
                <option>Select an option</option>
        
                  {groups?.map((group: any, idx: number) => {
                    const id = group.id ?? group._id ?? `${group.subjectCode}-${group.numberGroup}`;
                    const subjectName = group.subjectName ?? group.subjectCode;
                    return (
                      <option key={id ?? idx} value={id}>
                      {`Grupo ${group.numberGroup} - ${subjectName}`}
                    </option>
                  );
                })}
              </select>

              <label>Additional observations (Max 300 characters)</label>
              <textarea   
                placeholder="Enter your observations"
                rows={4}
                value={description}
                maxLength={300}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <div className="char-counter">{description.length}/300</div>
            </div>

            <div className="popUp-buttons">
              <button className="cancel-button" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="send-button" onClick={handleOnSubmit}>Send request</button>
            </div>
          </div>
        </div>
      )}
      {showAlert && (<div className="alertRequest">The Request Has Been Send Correctly</div>
      )}
    </>
  );
}
