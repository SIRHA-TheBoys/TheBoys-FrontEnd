import PopUpStudentID from "../../components/PopUpStudentID/PopUpStudentID";
import ScheduleTable from "../../components/ScheduleTable/ScheduleTable";
import SelectSemester from "../../components/SelectSemester/SelectSemester";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { userHook } from "../../hooks/userHook"

import "./Schedule.css";

export default function Schedule() {

  const { role } = userHook();

  const isAdmin = role === "administrator"

  console.log(role)

  return (
    <div>
      <TopBar />
      <SideBar />
      <div className="schedule">
        <h2 className="schedule_title">My Schedule</h2>
      </div>
      <div className="select_semester">
        <SelectSemester />
        { isAdmin && <PopUpStudentID />}
      </div>
      <div className="schedule_table">
        <ScheduleTable />
      </div>
    </div>
  );
}
