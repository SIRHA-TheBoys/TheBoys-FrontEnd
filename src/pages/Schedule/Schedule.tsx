import ScheduleTable from "../../components/ScheduleTable/ScheduleTable";
import SelectSemester from "../../components/SelectSemester/SelectSemester";
import TopBar from "../../components/TopBar";
import "./Schedule.css";

export default function Schedule() {
  return (
    <div>
      <TopBar />
      <div className="schedule">
        <h2 className="schedule_title">My Schedule</h2>
      </div>
      <div className="select_semester">
        <SelectSemester />
      </div>
      <div className="schedule_table">
        <ScheduleTable />
      </div>
    </div>
  );
}
