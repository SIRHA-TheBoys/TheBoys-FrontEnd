import { useState } from "react";
import "./PopUpStudentID.css"

interface Props{
    name: string
    onSubmit?: (studentId: string) => void
}

export default function PopUpStudentID({name, onSubmit} : Readonly<Props>){

    const [open, setOpen] = useState(false);
    const [studentId, setStudentId] = useState("");

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        
        if (studentId.trim() && onSubmit) {
            onSubmit(studentId.trim());
            setOpen(false);
            setStudentId("");
        }
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
                <button type="button" className="cancel-button" onClick={() => setOpen(false)}>
                    Cancel
                </button>
                <button type="button" className="send-button" onClick={() => handleSubmit()}>Send</button>
                </div>
            </div>
            </div>
        )}
        
        </>
    )

}