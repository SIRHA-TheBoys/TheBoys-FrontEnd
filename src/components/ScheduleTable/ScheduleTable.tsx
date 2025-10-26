import React, { useMemo } from "react";
import "./ScheduleTable.css";
import useScheduleHook from "../../hooks/scheduleHook";
import subjectHook from "../../hooks/subjectHook";
import { DAYS, HOURS } from "../../lib/schedule/constants";
import { buildScheduleMatrix } from "../../lib/schedule/buildMatrix";
import { getSubjectColor } from "../../lib/schedule/helpers";
import type { ScheduleCell } from "../../lib/schedule/types";

export default function ScheduleTable() {
  const { groups } = useScheduleHook();
  const { subjects } = subjectHook();

  // Construir matriz de horarios con helpers externos (memoizado)
  const scheduleMatrix: (ScheduleCell | null)[][] = useMemo(() => (
    buildScheduleMatrix(groups, subjects, /*rows*/ 13, DAYS)
  ), [groups, subjects]);

  return (
    <div className="schedule-grid">
      <div className="cell header time-header">Hour</div>
      {DAYS.map((day) => (
        <div key={day} className="cell header">{day}</div>
      ))}
      {HOURS.map((hour, hourIndex) => {
        return (
          <React.Fragment key={`row-${hour}`}>
            <div key={`time-${hour}`} className="cell time">{hour}</div>
            {DAYS.map((day, dayIndex) => {
              const cellData = scheduleMatrix[dayIndex][hourIndex];
              if (cellData && !cellData.isStart) {
                return null;
              }
              if (cellData?.isStart) {
                return (
                  <div 
                    key={`${day}-${hourIndex}`}
                    className="cell subject-cell"
                    style={{
                      backgroundColor: getSubjectColor(cellData.subjectCode),
                      gridRow: `span ${cellData.rowSpan}`
                    }}
                  >
                    <div className="subject-info">
                      <div className="subject-name">{cellData.subjectName}</div>
                      <div className="subject-group">Grupo {cellData.groupNumber}</div>
                    </div>
                  </div>
                );
              }
              return (
                <div key={`${day}-${hourIndex}`} className="cell empty-cell"></div>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
