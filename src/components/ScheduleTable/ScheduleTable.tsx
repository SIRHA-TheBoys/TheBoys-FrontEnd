import "./ScheduleTable.css";
export default function ScheduleTable() {
  const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday", "Sunday"
];
  const hours = [
    "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM",
    "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"
  ];

  return (
    <div className="schedule-grid">
      <div className="grid-header">
        <div className="cell header time-header">Hour</div>
        {days.map((day) => (
          <div key={day} className="cell header">{day}</div>
        ))}
      </div>

      {hours.map((hour) => (
        <div key={hour} className="grid-row">
          <div className="cell time">{hour}</div>
          {days.map((day) => (
            <div key={day} className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
}
