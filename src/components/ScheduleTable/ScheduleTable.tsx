import { useMemo } from "react";
import "./ScheduleTable.css";
import useScheduleHook from "../../hooks/scheduleHook";
import subjectHook from "../../hooks/subjectHook";
import { DAYS } from "../../lib/schedule/constants";
import { groupScheduleByDay } from "../../lib/schedule/buildMatrix";
import { getSubjectColor } from "../../lib/schedule/helpers";
import { Group } from "../../types/group";

interface ScheduleTableProps {
  customGroups?: Group[]
}

export default function ScheduleTable({ customGroups }: ScheduleTableProps = {}) {
  const { groups: userGroups } = useScheduleHook();
  const { subjects } = subjectHook();

  // Usa customGroups si se proporciona, sino usa los grupos del usuario actual
  const groups = customGroups || userGroups;

  const scheduleByDay = useMemo(() => (
    groupScheduleByDay(groups, subjects)
  ), [groups, subjects]);

  return (
    <div className="schedule-container">
      {DAYS.map((day) => (
        <div key={day} className="day-column">
          <div className="day-header">{day}</div>
          <div className="day-events">
            {scheduleByDay[day]?.length > 0 ? (
              scheduleByDay[day].map((event, index) => (
                <div
                  key={`${event.subjectCode}-${index}`}
                  className="event-card"
                  style={{ backgroundColor: getSubjectColor(event.subjectCode) }}
                >
                  <div className="event-time">
                    {event.startTime} - {event.endTime}
                  </div>
                  <div className="event-subject">{event.subjectName}</div>
                  <div className="event-group">Grupo {event.groupNumber}</div>
                </div>
              ))
            ) : (
              <div className="no-events">No sessions</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
