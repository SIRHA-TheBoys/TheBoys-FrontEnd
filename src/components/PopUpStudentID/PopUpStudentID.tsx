import { useState } from "react";
import "./PopUpStudentID.css"

interface Props{
    name: string
}

export default function PopUpStudentID({name} : Props){

    const [open, setOpen] = useState(false);
    const [studentId, setStudentId] = useState("");

    const handleSubmit = () => {

    }

    return (
        <>
        <button className="schedule-button" onClick={() => setOpen(true)}>
        {name}
        </button>

        {open && (
            <div className="popUp-overlay">
            <div className="popUp-container">
                <h2 className="popUp-title">Enter the student identification</h2>
                <form className="popUp-form" onSubmit={handleSubmit}>
                    <input
                       className="popUp-input"
                        type="text"
                        placeholder="Student identification"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        aria-label="Student identification"
                        autoFocus
                    /> 
                </form>
                <div className="popUp-buttons">
                <button className="cancel-button" onClick={() => setOpen(false)}>
                    Cancel
                </button>
                <button className="send-button">Send</button>
                </div>
            </div>
            </div>
        )}
        
        </>
    )

}