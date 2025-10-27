import { useState } from "react";
import PopUpStudentID from "../../components/PopUpStudentID/PopUpStudentID";
import ScheduleTable from "../../components/ScheduleTable/ScheduleTable";
import SelectSemester from "../../components/SelectSemester/SelectSemester";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { userHook } from "../../hooks/usersHook/userHook"
import useConsultStudentScheduleHook from "../../hooks/studentHooks/consultStudentScheduleHook";

import "./Schedule.css";

export default function Schedule() {

  const { role } = userHook();
  const isAdmin = role === "administrator"

  const [consultedStudentId, setConsultedStudentId] = useState("");
  const { groups: consultedGroups } = useConsultStudentScheduleHook({ studentId: consultedStudentId });

  const handleStudentIdSubmit = (studentId: string) => {
    setConsultedStudentId(studentId);
  };

  return (
    <div>
      <TopBar />
      <SideBar />
      <div className="schedule">
        <h2 className="schedule_title">
          {isAdmin && consultedStudentId 
            ? `Student Schedule (ID: ${consultedStudentId})` 
            : "My Schedule"}
        </h2>
      </div>
      <div className="select_semester">
        <SelectSemester />
        { isAdmin && <PopUpStudentID name="Consult Student Schedule" onSubmit={handleStudentIdSubmit}/>}
      </div>
      <div className="schedule_table">
        <ScheduleTable customGroups={isAdmin && consultedStudentId ? consultedGroups : undefined} />
      </div>
    </div>
  );
}
